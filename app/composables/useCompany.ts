// composables/useCompany.ts
import { ref } from "vue";
import type { Database } from "@/types/supabase"; // Import Supabase types

type CustomerCompany = Database["public"]["Tables"]["customer_company"]["Row"];

export const useCompany = () => {
  const supabase = useSupabaseClient();
  const companies = ref<CustomerCompany[]>([]);
  const loading = ref<boolean>(true);
  const error = ref<string | null>(null);

  const fetchCompanies = async (): Promise<void> => {
    try {
      const { data, error: fetchError } = await supabase.from(
        "customer_company"
      ).select(`
          id,
          company_name,
          logo
        `);

      if (fetchError) {
        throw fetchError;
      }

      companies.value = data as CustomerCompany[];
    } catch (fetchError) {
      error.value = fetchError.message;
      console.error("Error fetching companies:", fetchError);
    } finally {
      loading.value = false;
    }
  };

  // Fetch companies when the composable is used
  fetchCompanies();

  return {
    companies,
    loading,
    error,
  };
};
