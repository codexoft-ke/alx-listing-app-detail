import { PROPERTYLISTINGSAMPLE } from "../../constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "../../components/property/PropertyDetail";
import { useEffect, useState } from "react";
import { PropertyProps } from "../../interfaces/index";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Find property by name (id is the property name in URL)
      const foundProperty = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
      setProperty(foundProperty || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-8">
            The property you're looking for doesn't exist or may have been removed.
          </p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
