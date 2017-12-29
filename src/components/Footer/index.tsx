import * as React from "react"

export const Footer: React.SFC<FooterProps> = ({title}) => (
    <footer className="site-footer clearfix">
        <section className="copyright">
            <a href="/">{title}</a> © 2017
            <br />
            Licensed under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0</a>.
            <br />
            Feel free to share and build upon this material as long as you provide attribution.
        </section>
    </footer>
)

Footer.displayName = "Footer"

export default Footer

export interface FooterProps {
    title: string,
}
