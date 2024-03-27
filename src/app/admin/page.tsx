import { Card, 
         CardContent, 
         CardDescription, 
         CardTitle,
         CardHeader } from "@/components/ui/card";

export default function AdminDashboard() {
    return (
        <div className="grid-cols-1 lg:grid-cols-3">
           
            <Card className="mb-2">
                <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>There are 69 Products</CardDescription>
                </CardHeader>
                <CardContent>2 products have been sold</CardContent>
            </Card>
            <Card className="mb-2">
                <CardHeader>
                <CardTitle>Customers</CardTitle>
                <CardDescription>There are 69 users</CardDescription>
                </CardHeader>
                <CardContent>2 users have purchased items</CardContent>
            </Card>
            <Card className="">
                <CardHeader>
                <CardTitle>Sales</CardTitle>
                <CardDescription>2 total sales across website</CardDescription>
                </CardHeader>
                <CardContent>15$</CardContent>
            </Card>
        </div>
    )
}