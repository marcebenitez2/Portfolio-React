import React from 'react'

function Stack() {
    return (
        <section className='w-full h-screen flex flex-col py-12 gap-4'>
            <h3 className="text-6xl font-semibold mdn:text-4xl">Stack tecnologico:</h3>
            <div className='w-full flex h-full'>
                <div className='w-full bg-violet-800'></div>
                <div className='w-full'></div>
            </div>
        </section>
    )
}

export default Stack
