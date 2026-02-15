import { useState, useRef } from 'react'
import { Upload, X, Image as ImageIcon } from 'lucide-react'
import './MediaUpload.css'

const MediaUpload = ({ images = [], onChange, maxImages = 10, maxSizeMB = 5 }) => {
    const [dragActive, setDragActive] = useState(false)
    const [error, setError] = useState('')
    const inputRef = useRef(null)

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']

        if (!validTypes.includes(file.type)) {
            return 'Invalid file type. Please upload JPG, PNG, GIF, or WebP images.'
        }

        const sizeMB = file.size / (1024 * 1024)
        if (sizeMB > maxSizeMB) {
            return `File size exceeds ${maxSizeMB}MB limit.`
        }

        return null
    }

    const processFiles = async (fileList) => {
        setError('')

        const files = Array.from(fileList)

        if (images.length + files.length > maxImages) {
            setError(`Maximum ${maxImages} images allowed`)
            return
        }

        const newImages = []

        for (const file of files) {
            const validationError = validateFile(file)
            if (validationError) {
                setError(validationError)
                return
            }

            // Convert to base64 for localStorage
            const reader = new FileReader()
            const imageData = await new Promise((resolve) => {
                reader.onload = (e) => {
                    resolve({
                        url: e.target.result,
                        name: file.name,
                        size: file.size,
                        type: file.type
                    })
                }
                reader.readAsDataURL(file)
            })

            newImages.push(imageData)
        }

        onChange([...images, ...newImages])
    }

    const handleDrop = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            await processFiles(e.dataTransfer.files)
        }
    }

    const handleFileSelect = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            await processFiles(e.target.files)
        }
    }

    const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index)
        onChange(newImages)
    }

    const onButtonClick = () => {
        inputRef.current?.click()
    }

    return (
        <div className="media-upload">
            <div
                className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={onButtonClick}
            >
                <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    style={{ display: 'none' }}
                />
                <Upload size={32} className="upload-icon" />
                <p className="upload-text">
                    <strong>Click to upload</strong> or drag and drop
                </p>
                <p className="upload-hint">
                    PNG, JPG, GIF or WebP (max {maxSizeMB}MB each)
                </p>
            </div>

            {error && (
                <div className="upload-error">
                    {error}
                </div>
            )}

            {images.length > 0 && (
                <div className="image-preview-grid">
                    {images.map((image, index) => (
                        <div key={index} className="image-preview-item">
                            <img src={image.url} alt={image.name || `Image ${index + 1}`} />
                            <button
                                type="button"
                                className="remove-image-btn"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    removeImage(index)
                                }}
                                title="Remove image"
                            >
                                <X size={16} />
                            </button>
                            {index === 0 && (
                                <span className="primary-badge">Primary</span>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <p className="image-count">
                {images.length} / {maxImages} images
            </p>
        </div>
    )
}

export default MediaUpload
