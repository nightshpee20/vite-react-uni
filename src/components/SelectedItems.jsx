import React from 'react'
import './SelectedItems.css'

export default function SelectedItems({ selectedItems }) {
    return <>
        <table>
            <thead>
                <tr>
                    <th>Selected Items</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Description</th>
                    <th>Kcal</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                    <th>Carbs (g)</th>
                </tr>
            </thead>
            <tbody>
                {
                    selectedItems.map((item, id) => {
                        return <tr key={`${item.name}` + id}>
                            <td>{item.name}</td>
                            <td>{item.kcal}</td>
                            <td>{item.protein}</td>
                            <td>{item.fat}</td>
                            <td>{item.carbs}</td>
                        </tr>
                    })
                }
            </tbody>
            <thead>
                <tr>
                    <th>Sum:</th>
                    <th>{selectedItems.reduce((sum, curVal) => sum + curVal.kcal, 0)}</th>
                    <th>{selectedItems.reduce((sum, curVal) => sum + curVal.protein, 0).toFixed(2)}</th>
                    <th>{selectedItems.reduce((sum, curVal) => sum + curVal.fat, 0).toFixed(2)}</th>
                    <th>{selectedItems.reduce((sum, curVal) => sum + curVal.carbs, 0).toFixed(2)}</th>
                </tr>
            </thead>
        </table>
    </>
}