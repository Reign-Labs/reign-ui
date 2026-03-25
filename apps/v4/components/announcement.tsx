import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="bg-muted">
      <Link href="/docs/changelog/2026-03-introducing-reign-ui">
        Introducing Reign Labs UI — the foundation of the ecosystem{" "}
        <ArrowRightIcon />
      </Link>
    </Badge>
  )
}
