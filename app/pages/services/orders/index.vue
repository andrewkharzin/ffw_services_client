<script setup lang="ts">
import { ref, computed } from "vue";
import { Database } from "@/types/supabase";

type Service = Database["public"]["Tables"]["services"]["Row"];
type CustomerCompany = Database["public"]["Tables"]["customer_company"]["Row"];

const q = ref("");
const selected = ref<Service[]>([]);
const selectedStatuses = ref<string[]>([]);
const selectedLocations = ref<string[]>([]);
const selectedCompany = ref<CustomerCompany | null>(null); // Selected company filter
const sort = ref({ column: "service_date", direction: "asc" as const });

// Use the useServices composable
const { services, loading, error } = useServices();
const {
  companies: companyNames,
  loading: loadingCompanies,
  error: companyError,
} = useCompany();

const query = computed(() => ({
  q: q.value,
  statuses: selectedStatuses.value,
  locations: selectedLocations.value,
  company: selectedCompany?.company_name || null, // Company filter
  sort: sort.value.column,
  order: sort.value.direction,
}));

// Handle sort changes
const handleSortChange = (newSort: any) => {
  sort.value = newSort;
};

// Handle company filter changes
const handleFilterChange = (companyName: string | null) => {
  selectedCompany.value =
    companyNames.value.find(
      (company) => company.company_name === companyName
    ) || null;
};

// Handle row selection
const handleRowSelect = (selectedRows: any) => {
  console.log("Selected rows: ", selectedRows);
};
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Services" :badge="services.length">
        <template #right>
          <UInput
            v-model="q"
            icon="i-heroicons-funnel"
            autocomplete="off"
            placeholder="Filter services..."
            class="hidden lg:block"
          />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
          <USelectMenu
            v-model="selectedColumns"
            icon="i-heroicons-adjustments-horizontal-solid"
            :options="defaultColumns"
            multiple
          >
            <template #label> Display </template>
          </USelectMenu>
        </template>

        <!-- Add the company filter to the toolbar, aligned to the right -->
        <template #right>
          <AppServicesOrdersUiCompanyFilter
            :companyNames="
              companyNames.length ? companyNames : ['No companies available']
            "
            @update-company="handleFilterChange"
          />
        </template>
      </UDashboardToolbar>

      <!-- Use the child component -->
      <AppServicesOrdersTable
        :services="services"
        :loading="loading"
        :error="error"
        @sort-change="handleSortChange"
        @filter-change="handleFilterChange"
        @select-row="handleRowSelect"
      />

      <template v-if="error">
        <p>Error: {{ error }}</p>
      </template>
      <template v-if="companyError">
        <p>Error fetching companies: {{ companyError }}</p>
      </template>
    </UDashboardPanel>
  </UDashboardPage>
</template>
