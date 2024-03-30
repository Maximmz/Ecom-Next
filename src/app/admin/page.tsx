import { Card, 
         CardContent, 
         CardDescription, 
         CardTitle,
         CardHeader } from "@/components/ui/card";
import db from "@/db/db";

       async function getSalesData() {
         const data = await db.order.aggregate({
                _sum: {totalPrice: true},
                _count: true
            })
            return {
                amount: data._sum.totalPrice || 0,
                numberOfSales: data._count
            }
         }
         

         async function getUsers() {
            const data = await db.user.aggregate({
                
                _count: true,
                
            })
            
            return {
                numberOfUsers: data._count

            }
         }
         async function getProducts() {
            const data = await db.product.aggregate({
                _count: true
            })
            return {
                numberOfProducts: data._count
            }
         }
         async function getRatings() {
            const data = await db.review.aggregate({
                _count: true
            })
                return {
                    numberOfRatings: data._count
                }

            }
         

export default async function AdminDashboard() {
    const salesData = await getSalesData();
    const userData = await getUsers();
    const productData = await getProducts();
    const ratingData = await getRatings();
    console.log(ratingData.numberOfRatings)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <DashboardCard title="Sales" subtitle={`Number of sales: ${salesData.numberOfSales}`} body={`Total amount earned: $${salesData.amount}`}/>
            <DashboardCard title="Customers" subtitle={`Number of users: ${userData.numberOfUsers}`} body={`User interactions: ${ratingData.numberOfRatings}`} />
            <DashboardCard title="Products" subtitle={`Number of products: ${productData.numberOfProducts}`} body={`Number of products rated: ${ratingData.numberOfRatings}`}/>
         
        </div>
    )
}

type DashboardCardProps = {
    title: String,
    subtitle: String,
    body: String
}

function DashboardCard({title, subtitle, body}: DashboardCardProps) {
    return (
        
        <Card>
                <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
                </CardHeader>
                <CardContent>{body}</CardContent>
            </Card>
           
            
    )
} 