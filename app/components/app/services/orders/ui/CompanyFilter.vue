<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";
import { Database } from "@/types/supabase";

type CustomerCompany = Database["public"]["Tables"]["customer_company"]["Row"];

const props = defineProps<{
  companyNames: CustomerCompany[];
}>();

const emits = defineEmits(["update-company"]);
const selectedCompany = ref<CustomerCompany | null>(
  props.companyNames[0] || null
); // Fallback to null if no company

watch(selectedCompany, (newVal) => {
  emits("update-company", newVal?.company_name || null); // Emit the company name or null
});
</script>

<template>
  <USelect
    v-model="selectedCompany"
    :options="
      props.companyNames.map((company) => ({
        label: company.company_name,
        value: company,
      }))
    "
    placeholder="Select Company"
  />
</template>
