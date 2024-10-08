<script setup lang="ts">
import { ref, watch, computed } from "vue";

// Props for the data passed from the parent component
const props = defineProps({
  services: Array, // All service data passed from the parent
  loading: Boolean,
  error: String,
});

// Emit events for sort and row selection
const emits = defineEmits(["sort-change", "select-row", "filter-change"]);

// State for filtering and sorting
const sort = ref({ column: "service_date", direction: "asc" as const });
const selectedCompany = ref(null); // Holds the selected company for filtering
const selectedColumns = ref([
  { key: "select", label: "", width: "30px" }, // Checkbox column
  { key: "id", label: "#" },
  { key: "full_name", label: "Customer", sortable: true },
  { key: "service_date", label: "Service Date", sortable: true },
  { key: "type_name", label: "Type", sortable: true },
  { key: "status", label: "Status" },
]);

// Available company names for filtering, based on the services data
const companyNames = computed(() => {
  const names = props.services
    .map((service) => service.customers?.company_id?.company_name)
    .filter((name) => name !== undefined);
  return [...new Set(names)]; // Get unique company names
});

// Filtered services based on selected company
const filteredServices = computed(() => {
  if (!selectedCompany.value) {
    return props.services;
  }
  return props.services.filter(
    (service) =>
      service.customers?.company_id?.company_name === selectedCompany.value
  );
});

// Handle sorting changes
watch(sort, (newVal) => {
  emits("sort-change", newVal);
});

// Handle company filter changes
watch(selectedCompany, (newVal) => {
  emits("filter-change", newVal);
});

// Handle company selection from the CompanyFilter component
const handleCompanyUpdate = (company: string) => {
  selectedCompany.value = company;
};
</script>

<template>
  <!-- Filter form with company name selection using CompanyFilter.vue -->
  <AppServicesOrdersUiCompanyFilter
    :companyNames="companyNames"
    @update-company="handleCompanyUpdate"
  />

  <!-- Table displaying filtered services -->
  <UTable
    v-model:sort="sort"
    :rows="filteredServices"
    :columns="selectedColumns"
    :loading="loading"
    sort-mode="manual"
    class="w-full"
  >
    <!-- Checkbox column -->
    <template #select-data="{ row }">
      <input type="checkbox" @change="$emit('select-row', row)" />
    </template>

    <!-- Full Name and Company Column -->
    <template #full_name-data="{ row }">
      <div class="flex items-center gap-3">
        <UAvatar :src="row.customers.company_id.logo" size="xs" />
        <div class="flex flex-col">
          <p class="text-md font-bold">{{ row.customers.full_name }}</p>
          <span v-if="row.customers.company_id" class="text-md font-light">
            {{ row.customers.company_id.company_name }}
          </span>
          <span v-else>No company name</span>
        </div>
      </div>
    </template>

    <!-- Service Date Column -->
    <template #service_date-data="{ row }">
      <span class="text-sm font-bold text-slate-600">
        {{ new Date(row.service_date).toLocaleString() }}
      </span>
    </template>

    <!-- Type Name Column -->
    <template #type_name-data="{ row }">
      <span>{{ row.type_name }}</span>
    </template>

    <!-- Status Column -->
    <template #status-data="{ row }">
      <UBadge
        :label="row.status"
        :color="row.status === 'completed' ? 'green' : 'red'"
        variant="subtle"
        class="capitalize"
      />
    </template>
  </UTable>

  <!-- Error Handling -->
  <template v-if="error">
    <p>Error: {{ error }}</p>
  </template>
</template>
