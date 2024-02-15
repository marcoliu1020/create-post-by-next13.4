import { Badge } from "@/components/ui/badge";

export function ColorBadge({ priority }: { priority: string | null; }) {
    if (priority === 'low') return <Badge className="bg-green-500">{priority}</Badge>;
    if (priority === 'medium') return <Badge className="bg-orange-500">{priority}</Badge>;
    if (priority === 'high') return <Badge className="bg-rose-500">{priority}</Badge>;

    return <Badge>{priority}</Badge>;
}
