<<<<<<< HEAD

// import { getPropertyById } from "@/api/properties";
// import ProductDetail from "@/components/properties/PropertyDetails";

// export default async function ProductByIdPage({ params }) {
//   const response = await getPropertyById(params.propertyId);
//   const product = response.data;

//   return <ProductDetail product={product} />;
// }
// appPRODUCT_MANAGEMENT_ROUTE/[propertyId]/page.jsx
import { getPropertyById } from "@/api/properties";
import ProductDetail from "@/components/properties/PropertyDetails";

export default async function ProductByIdPage({ params }) {
  try {
    const response = await getPropertyById(params.propertyId);
    const product = response.data;

    return <ProductDetail product={product} />;
  } catch (error) {
    return (
      <div className="p-4 text-red-600">
        Failed to load product. {error?.message || "Please try again later."}
      </div>
    );
  }
}
=======

// import { getPropertyById } from "@/api/properties";
// import ProductDetail from "@/components/properties/PropertyDetails";

// export default async function ProductByIdPage({ params }) {
//   const response = await getPropertyById(params.propertyId);
//   const product = response.data;

//   return <ProductDetail product={product} />;
// }
// appPRODUCT_MANAGEMENT_ROUTE/[propertyId]/page.jsx
import { getPropertyById } from "@/api/properties";
import ProductDetail from "@/components/properties/PropertyDetails";

export default async function ProductByIdPage({ params }) {
  try {
    const response = await getPropertyById(params.propertyId);
    const product = response.data;

    return <ProductDetail product={product} />;
  } catch (error) {
    return (
      <div className="p-4 text-red-600">
        Failed to load product. {error?.message || "Please try again later."}
      </div>
    );
  }
}
>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
