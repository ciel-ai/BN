import { useState, useEffect } from 'react'
import { FileText, Link as LinkIcon, Plus, Trash2, ExternalLink } from 'lucide-react'
import Button from '../../components/Button'
import { dataService } from '../../services/dataService'

const DealerAccess = () => {
    const [documents, setDocuments] = useState([])
    const [isAdding, setIsAdding] = useState(false)
    const [newDoc, setNewDoc] = useState({ title: '', url: '', type: 'pdf' })

    useEffect(() => {
        loadDocuments()
    }, [])

    const loadDocuments = async () => {
        // Mock data or load from localStorage
        const docs = await dataService.getDealerDocuments() || []
        if (docs.length === 0) {
            // Seed initial data if empty
            const initial = [
                { id: 1, title: 'Export Price List 2025', url: '#', type: 'pdf' },
                { id: 2, title: 'Domestic Catalog 2025', url: '#', type: 'pdf' },
                { id: 3, title: 'Distributor Agreement Form', url: '#', type: 'doc' }
            ]
            setDocuments(initial)
            // Save to persist
            // await dataService.saveDealerDocuments(initial) 
        } else {
            setDocuments(docs)
        }
    }

    const handleAdd = async (e) => {
        e.preventDefault()
        const doc = { ...newDoc, id: Date.now() }
        const updated = [...documents, doc]
        setDocuments(updated)
        // await dataService.saveDealerDocuments(updated)
        setIsAdding(false)
        setNewDoc({ title: '', url: '', type: 'pdf' })
    }

    const handleDelete = (id) => {
        if (window.confirm('Delete this document?')) {
            const updated = documents.filter(d => d.id !== id)
            setDocuments(updated)
            // await dataService.saveDealerDocuments(updated)
        }
    }

    return (
        <div className="admin-page">
            <div className="page-header">
                <div className="header-title">
                    <h1>Dealer Access</h1>
                    <p>Manage documents and resources for distributors</p>
                </div>
                <Button onClick={() => setIsAdding(!isAdding)} variant="primary" icon={<Plus size={18} />}>
                    Add Document
                </Button>
            </div>

            {isAdding && (
                <div className="content-card mb-4" style={{ padding: '1.5rem', border: '1px solid var(--color-primary)' }}>
                    <h3>Add New Resource</h3>
                    <form onSubmit={handleAdd} style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                        <div>
                            <label>Title</label>
                            <input
                                type="text"
                                value={newDoc.title}
                                onChange={e => setNewDoc({ ...newDoc, title: e.target.value })}
                                required
                                style={{ width: '100%', padding: '0.5rem' }}
                            />
                        </div>
                        <div>
                            <label>URL / Link</label>
                            <input
                                type="text"
                                value={newDoc.url}
                                onChange={e => setNewDoc({ ...newDoc, url: e.target.value })}
                                required
                                style={{ width: '100%', padding: '0.5rem' }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Button type="submit" variant="primary">Save</Button>
                            <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
                        </div>
                    </form>
                </div>
            )}

            <div className="content-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Resource Name</th>
                            <th>Type</th>
                            <th>Link</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map(doc => (
                            <tr key={doc.id}>
                                <td>
                                    <div style={{ display: 'flex', items: 'center', gap: '10px' }}>
                                        <FileText size={18} color="var(--color-primary)" />
                                        <strong>{doc.title}</strong>
                                    </div>
                                </td>
                                <td><span className="status-badge" style={{ background: '#e0f2fe', color: '#0369a1' }}>{doc.type.toUpperCase()}</span></td>
                                <td>
                                    <a href={doc.url} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--color-primary)' }}>
                                        View <ExternalLink size={14} />
                                    </a>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <button className="action-btn delete" onClick={() => handleDelete(doc.id)}>
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DealerAccess
