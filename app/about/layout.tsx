import { AboutHeader } from "@/components"

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
        <main>
            <AboutHeader />
            {children}
        </main>
         </>
    )
}