# Bug Report: Applications Table Not Rendering

**Date:** {{ Today's Date }}

**Component:** `pages/applications/index.vue` and `components/ApplicationsTable.vue`

**Issue:**
The applications table was not rendering on the `/applications` page.

**Analysis:**
- The `pages/applications/index.vue` component correctly fetched (mock) data and passed it to the `components/ApplicationsTable.vue` component.
- The `components/ApplicationsTable.vue` component iterated through the data using `v-for`.
- The `components/StatusBadge.vue` component used dynamic CSS classes (e.g., `status-pending`, `status-approved`) based on the application status.
- These `status-*` classes were not defined in the Tailwind configuration or within the component's styles, causing potential rendering issues.

**Fix:**
Added a `<style scoped>` block to `components/StatusBadge.vue` defining the missing status classes (`status-pending`, `status-approved`, `status-rejected`, `status-review`) using appropriate Tailwind utility classes for background and text colors.

**File Modified:** `components/StatusBadge.vue`

**Next Steps:**
- Verify the fix by checking the `/applications` page in the browser.
- Consider moving these status styles to the global CSS or Tailwind configuration if they are used elsewhere. 