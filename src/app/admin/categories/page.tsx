import db from "@/db/db";
import CatDesign from "../_components/CatDesign";
import CategoryComponent from '../_components/Category';
import {getProducts} from "../../utils/productFetcher";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default async function Categories() {
const products = await getProducts();

    return (
        <div className="container">
            <h1 className="font-bold underline text-2xl">Add Products to Categories</h1>
           <div className="flex justify-end">
             <Button asChild>
                <Link href="./categories/new">Add Category</Link>
            </Button>
            </div>
            <div className="flex flex-wrap justify-center pt-8 bg-slate-100 max-w-full mt-4 rounded-lg h-[40vh] md:h-[40vh]">
                {/* Render the CatDesign component and pass the products as props */}
                <CatDesign products={products} />
            </div>
            <CategoryComponent />
        </div>
    );
}

