import React, { useEffect } from 'react'

export default function Template() {
    useEffect(() => {
        const prev = document.title
        document.title = 'Noah Career Coaching Website Template'
        const s = document.createElement('script')
        s.src = '/script.js'
        s.async = true
        document.body.appendChild(s)
        return () => {
            document.title = prev
            if (s.parentNode) s.parentNode.removeChild(s)
        }
    }, [])

    return (
        <>
            {/* Navigation placeholder */}
            <div id="nav-inserter"></div>

            <main>
                {/* add stuff here lol */}
            </main>

            {/* back to top */}
            <button type="button" className="glass-back" id="backToTop">
                <i className="bi bi-arrow-up"></i>
            </button>
        </>
    )
}
