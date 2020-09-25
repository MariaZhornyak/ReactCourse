import React from "react";

export const Ninjas = ({ ninjas, deleteNinja }) => {
    return (
        <div className='ninja-list'>
            {
                ninjas.map(ninja => {
                    if (ninja.age > 18) {
                        return (
                            <div className='ninja' key={ ninja.id }>
                            <div>name: { ninja.name }</div>
                            <div>age: { ninja.age }</div>
                            <div>book: { ninja.book }</div>
                            <button onClick={ () => {deleteNinja(ninja.id)} }>Delete Ninja</button>
                        </div>
                        )
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
}

export default Ninjas;