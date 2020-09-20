import React from "react";

export const Ninjas = ({ ninjas }) => {
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 18) {
    //         return (
    //             <div className='ninja' key={ ninja.id }>
    //             <div>name: { ninja.name }</div>
    //             <div>age: { ninja.age }</div>
    //             <div>book: { ninja.book }</div>
    //         </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // });

    // const ninjaList = ninjas.map(ninja => {
    //     //condition ? (returns if true) : (returns if false)
    //     return ninja.age > 20 ? (
    //         <div className='ninja' key={ ninja.id }>
    //             <div>name: { ninja.name }</div>
    //             <div>age: { ninja.age }</div>
    //             <div>book: { ninja.book }</div>
    //         </div>
    //     ) : null;
    // });

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