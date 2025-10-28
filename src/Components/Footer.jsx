import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Movie Lens Hub</p>
                </aside>
            </footer>
        </div>
    )
}
