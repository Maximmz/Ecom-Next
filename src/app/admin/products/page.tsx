import { Button } from "@/components/ui/Button";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";

export default function AdminProductsPage() {
    return <>
    <div className="flex justify-between gap-4 items-center">
    <PageHeader> Products</PageHeader>
    <Button asChild>
        <Link href="/admin/products/new">New Product</Link>
    </Button>
    </div>
    </>
}