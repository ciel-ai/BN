import { useState } from 'react'
import { Bold, Italic, List, Link as LinkIcon } from 'lucide-react'
import './RichTextEditor.css'

const RichTextEditor = ({ value = '', onChange, placeholder = 'Enter description...' }) => {
    const [showLinkModal, setShowLinkModal] = useState(false)
    const [linkUrl, setLinkUrl] = useState('')

    const handleFormat = (format) => {
        const textarea = document.querySelector('.rich-textarea')
        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const selectedText = value.substring(start, end)

        let formattedText = ''

        switch (format) {
            case 'bold':
                formattedText = `**${selectedText}**`
                break
            case 'italic':
                formattedText = `*${selectedText}*`
                break
            case 'list':
                formattedText = selectedText.split('\n').map(line => `• ${line}`).join('\n')
                break
            case 'link':
                setShowLinkModal(true)
                return
            default:
                return
        }

        const newValue = value.substring(0, start) + formattedText + value.substring(end)
        onChange(newValue)
    }

    const insertLink = () => {
        const textarea = document.querySelector('.rich-textarea')
        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const selectedText = value.substring(start, end) || 'link text'

        const linkMarkdown = `[${selectedText}](${linkUrl})`
        const newValue = value.substring(0, start) + linkMarkdown + value.substring(end)
        onChange(newValue)

        setLinkUrl('')
        setShowLinkModal(false)
    }

    return (
        <div className="rich-text-editor">
            <div className="editor-toolbar">
                <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => handleFormat('bold')}
                    title="Bold"
                >
                    <Bold size={16} />
                </button>
                <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => handleFormat('italic')}
                    title="Italic"
                >
                    <Italic size={16} />
                </button>
                <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => handleFormat('list')}
                    title="Bullet List"
                >
                    <List size={16} />
                </button>
                <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => handleFormat('link')}
                    title="Insert Link"
                >
                    <LinkIcon size={16} />
                </button>
                <span className="toolbar-hint">Supports Markdown formatting</span>
            </div>

            <textarea
                className="rich-textarea"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={8}
            />

            {showLinkModal && (
                <div className="link-modal-overlay" onClick={() => setShowLinkModal(false)}>
                    <div className="link-modal" onClick={(e) => e.stopPropagation()}>
                        <h3>Insert Link</h3>
                        <input
                            type="url"
                            placeholder="https://example.com"
                            value={linkUrl}
                            onChange={(e) => setLinkUrl(e.target.value)}
                            autoFocus
                        />
                        <div className="modal-actions">
                            <button type="button" onClick={insertLink} className="btn-primary">
                                Insert
                            </button>
                            <button type="button" onClick={() => setShowLinkModal(false)} className="btn-secondary">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RichTextEditor
