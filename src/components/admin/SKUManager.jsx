import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import './SKUManager.css';

const SKUManager = ({ skus = [], onChange }) => {
    const [skuList, setSkuList] = useState(skus.length > 0 ? skus : [
        { id: '1', code: '', name: '', price: '', stock: 'in-stock', isDefault: true }
    ]);

    const addSKU = () => {
        const newSKU = {
            id: Date.now().toString(),
            code: '',
            name: '',
            price: '',
            stock: 'in-stock',
            isDefault: false
        };
        const updated = [...skuList, newSKU];
        setSkuList(updated);
        onChange(updated);
    };

    const removeSKU = (id) => {
        if (skuList.length === 1) {
            alert('You must have at least one SKU');
            return;
        }
        const updated = skuList.filter(sku => sku.id !== id);
        setSkuList(updated);
        onChange(updated);
    };

    const updateSKU = (id, field, value) => {
        const updated = skuList.map(sku =>
            sku.id === id ? { ...sku, [field]: value } : sku
        );
        setSkuList(updated);
        onChange(updated);
    };

    const setDefault = (id) => {
        const updated = skuList.map(sku => ({
            ...sku,
            isDefault: sku.id === id
        }));
        setSkuList(updated);
        onChange(updated);
    };

    return (
        <div className="sku-manager">
            <div className="sku-header">
                <h4>Product SKUs & Variants</h4>
                <button type="button" className="add-sku-btn" onClick={addSKU}>
                    <Plus size={16} />
                    Add SKU
                </button>
            </div>

            <div className="sku-list">
                {skuList.map((sku, index) => (
                    <div key={sku.id} className="sku-item">
                        <div className="sku-item-header">
                            <span className="sku-label">SKU #{index + 1}</span>
                            {sku.isDefault && <span className="default-badge">Default</span>}
                            {skuList.length > 1 && (
                                <button
                                    type="button"
                                    className="remove-sku-btn"
                                    onClick={() => removeSKU(sku.id)}
                                    title="Remove SKU"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        <div className="sku-fields">
                            <div className="sku-field">
                                <label>SKU Code *</label>
                                <input
                                    type="text"
                                    value={sku.code}
                                    onChange={(e) => updateSKU(sku.id, 'code', e.target.value)}
                                    placeholder="e.g., HSN-001"
                                    required
                                />
                            </div>

                            <div className="sku-field">
                                <label>Variant Name</label>
                                <input
                                    type="text"
                                    value={sku.name}
                                    onChange={(e) => updateSKU(sku.id, 'name', e.target.value)}
                                    placeholder="e.g., Large Size"
                                />
                            </div>

                            <div className="sku-field">
                                <label>Price</label>
                                <input
                                    type="text"
                                    value={sku.price}
                                    onChange={(e) => updateSKU(sku.id, 'price', e.target.value)}
                                    placeholder="Contact for Price"
                                />
                            </div>

                            <div className="sku-field">
                                <label>Stock Status</label>
                                <select
                                    value={sku.stock}
                                    onChange={(e) => updateSKU(sku.id, 'stock', e.target.value)}
                                >
                                    <option value="in-stock">In Stock</option>
                                    <option value="out-of-stock">Out of Stock</option>
                                    <option value="pre-order">Pre-Order</option>
                                </select>
                            </div>
                        </div>

                        {!sku.isDefault && (
                            <button
                                type="button"
                                className="set-default-btn"
                                onClick={() => setDefault(sku.id)}
                            >
                                Set as Default
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SKUManager;
