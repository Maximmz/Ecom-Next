import { Card, 
         CardContent, 
         CardDescription, 
         CardTitle,
         CardHeader } from "@/components/ui/card";

export default function AdminDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            <Card>
                <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>There are 69 Products</CardDescription>
                </CardHeader>
                <CardContent><p>2 products have been sold</p></CardContent>
            </Card>
            <Card>
                <CardHeader>
                <CardTitle>Customers</CardTitle>
                <CardDescription>There are 69 users</CardDescription>
                </CardHeader>
                <CardContent>2 users have purchased items</CardContent>
            </Card>
            <Card>
                <CardHeader>
                <CardTitle>Sales</CardTitle>
                <CardDescription>2 total sales across website</CardDescription>
                </CardHeader>
                <CardContent>15$</CardContent>
            </Card>
        </div>
    )
}