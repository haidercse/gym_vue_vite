<template>
  <main id="main-container">
      <!-- Page Content -->
      <div class="content">
        <!-- Full Table -->
        <div class="block block-rounded">
          <div class="block-header">
            <h3 class="block-title">Organization List</h3>
            <div class="block-options">
              <router-link :to="{name: 'member-create'}" type="button" class="btn btn-alt-success">
                <i class="fa fa-plus"></i>
              </router-link>
            </div>
          </div>
          <div class="block-content">
            <div class="table-responsive">
              <table
                class="
                  table table-bordered table-striped table-vcenter
                  js-dataTable-full-pagination
                "
                id="dataTable"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Short Name</th>
                    <th>Address</th>
                    <th class="text-center" style="width: 100px">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-w600 font-size-sm">
                       Hello
                    </td>
                    <td>Haaiddd</td>
                    <td>XYZ</td>
                    <td class="text-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-alt-primary js-tooltip-enabled"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i class="fa fa-fw fa-pencil-alt"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-alt-primary js-tooltip-enabled"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i class="fa fa-fw fa-times"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- END Full Table -->
      </div>
      <!-- END Page Content -->
    </main>
</template>

<script>
import MainDashboardHeader from "../../../components/template/MainDashboardHeader.vue";
export default { components: { MainDashboardHeader } };
</script>

<style>
</style>
