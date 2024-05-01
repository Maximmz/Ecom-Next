import { Card, 
         CardContent, 
         CardDescription, 
         CardTitle,
         CardHeader } from "@/components/ui/Card";
import db from "@/db/db";
import { formatNumber, formatCurrency } from "@/lib/formatters";


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
           const [userCount, orderData] = await Promise.all([
                db.user.count(),
                db.order.aggregate({
                    _sum: {totalPrice: true}
                })
                
            ])
            return {
                userCount,
                averageValuePerUser: userCount === 0 ? 0 : (orderData._sum.totalPrice || 0 / userCount)
            }
        
         }
         async function getProducts() {
            const [activeProducts, inactiveProducts] = await Promise.all([
            db.product.count({where: {available: true}}),
            db.product.count({where: {available: false}})
            ])
            return {
                activeProducts, inactiveProducts
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
    const [salesData, userData, productData, ratingData] = await Promise.all([
        getSalesData(),
        getUsers(),
        getProducts(),
        getRatings()
    ])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <DashboardCard
           title="Sales" 
           subtitle={`Number of sales: ${formatNumber(salesData.numberOfSales)}`} body={`Amount earned: ${formatCurrency(salesData.amount)}`}/>
            <DashboardCard 
            title="Customers" 
            subtitle={`Number of users: ${userData.userCount}`} body={`Average user spendings: ${userData.averageValuePerUser}`} />
            <DashboardCard 
            title="Products" 
            subtitle={`${productData.activeProducts} Active, ${productData.inactiveProducts} Inactive`} body={`Number of products rated: ${ratingData.numberOfRatings}`}/>
         
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