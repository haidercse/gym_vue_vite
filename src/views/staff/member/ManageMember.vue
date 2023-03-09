<template>
  <main id="main-container">
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <div class="block block-rounded">
        <div class="block-header">
          <h3 class="block-title">Member List</h3>
          <div class="block-options">
            <router-link
              :to="{ name: 'member-create' }"
              type="button"
              class="btn btn-alt-success"
            >
              <i class="fa fa-plus"></i>
            </router-link>
          </div>
        </div>
        <ShowSuccess></ShowSuccess>
        <div class="block-content">
          <div class="table-responsive">
            <table
              class="table table-bordered table-striped table-vcenter js-dataTable-full-pagination"
              id="dataTable"
            >
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Id</th>
                  <th>Mobile Number</th>
                  <th>Card No</th>
                  <th>Start Date</th>
                  <th>Status</th>
                 
                  <th>Create By</th>
                  <th class="text-center" style="width: 100px">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(member, id) in all_members" :key="id">
                  <td class="text-center">
                    <img
                      :src="member.image"
                      :alt="member.name"
                      style="width: 80px"
                    />
                  </td>
                  <td class="font-w600 font-size-sm">{{ member.name }}</td>
                  <td>{{ member.member_id }}</td>
                  <td>{{ member.mobile_number }}</td>
                  <td>{{ member.card_no }}</td>
                  <td>{{ member.start_date ?? "N/A" }}</td>
                  <td>
                    <span
                      class="badge"
                      :class="getStatusColor(member.status)"
                      >{{ getStatusName(member.status) }}</span
                    >
                  </td>
                  
                  <td>{{ member.create_by }}</td>
                  <td class="text-center">
                    <div class="btn-group">
                      <router-link :to="{ name: 'member-edit', params: { id: member.id }}"
                        type="button"
                        class="btn btn-sm btn-alt-primary js-tooltip-enabled"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Edit"
                      >
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </router-link>
                      <button
                        type="button"
                        class="btn btn-sm btn-alt-primary js-tooltip-enabled"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Delete"
                        @click="deleteMember(member.id)"
                      >
                        <i class="fa fa-fw fa-times"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-end">
              <li class="page-item">
                <a
                  class="page-link"
                  href="javascript:void(0)"
                  tabindex="-1"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <i class="fa fa-angle-double-left"></i>
                  </span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript:void(0)">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">2</a>
              </li>
              <li class="page-item disabled">
                <a class="page-link" href="javascript:void(0)">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">4</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="javascript:void(0)"
                  aria-label="Next"
                >
                  <span aria-hidden="true">
                    <i class="fa fa-angle-double-right"></i>
                  </span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- END Full Table -->
    </div>
    <!-- END Page Content -->
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ShowSuccess from "../../../components/utilities/ShowSuccess.vue";
import MainDashboardHeader from "../../../components/template/MainDashboardHeader.vue";
export default {
  components: {
    MainDashboardHeader,
    ShowSuccess,
  },
  mounted() {
    this.getAllMember();
  },
  methods: {
    ...mapActions(["getAllMember", "memberDelete"]),
  
    deleteMember(id) {
      console.log(id);
      let text = "Do you want to delete this";
      if (confirm(text) == true) {
        this.memberDelete(id);
      }
      
    },
    getStatusName(value) {
      if (value == 0) {
        return "Inactive";
      } else if (value == 1) {
        return "Active";
      }
    },
    getStatusColor(color) {
      if (color == 0) {
        return "badge-danger";
      } else if (color == 1) {
        return "badge-success";
      }
    },
  },
  computed: {
    ...mapState({
      all_members: (state) => state.member.members,
    }),
  },
};
</script>

<style></style>
