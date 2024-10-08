import { ref } from "vue";

interface Service {
  id: number;
  service_type_id: number;
  customer_id: number;
  service_date: string;
  created_at: string;
  description: string;
  status: string;
  type_name?: string; // Service type name
  full_name?: string; // Customer full name
}

interface ServiceType {
  type_name: string;
}

interface Customer {
  full_name: string;
}

export const useServices = () => {
  const supabase = useSupabaseClient();
  const services = ref<Service[]>([]);
  const loading = ref<boolean>(true);
  const error = ref<string | null>(null);

  const fetchServices = async (): Promise<void> => {
    try {
      const { data, error: fetchError } = await supabase.from("services")
        .select(`
          id,
          service_type_id,
          customer_id,
          service_date,
          created_at,
          description,
          status,
          servicetype (type_name),
          customers (full_name, company_id:customer_company(company_name, logo))
        `);

      if (fetchError) {
        throw fetchError;
      }

      // Log the raw data for debugging
      console.log("Fetched Data:", data);

      services.value = (
        data as (Service & {
          servicetype?: ServiceType;
          customers?: Customer;
        })[]
      ).map((service) => ({
        ...service,
        type_name: service.servicetype?.type_name || "N/A", // Service type name
        full_name: service.customers?.full_name || "N/A", // Customer full name
      }));
    } catch (fetchError) {
      error.value = fetchError.message;
      console.error("Error fetching services:", fetchError);
    } finally {
      loading.value = false;
    }
  };

  // Fetch services when the composable is used
  fetchServices();

  return {
    services,
    loading,
    error,
  };
};
