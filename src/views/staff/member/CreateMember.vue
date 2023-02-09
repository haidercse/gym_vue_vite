<template>
  <main id="main-container">
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <div class="block block-rounded">
        <!-- error message -->

        <div class="block-header">
          <h3 class="block-title">Member Create</h3>
          <div class="block-options">
            <router-link
              :to="{ name: 'member' }"
              type="button"
              class="btn btn-alt-success"
            >
              <i class="far fa-fw fa-arrow-alt-circle-left"></i>
            </router-link>
          </div>
        </div>
        <div class="block-content">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Member Name <span>*</span> </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="form.name"
                  placeholder="Enter Member Name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="short_name">Mobile Number <span>*</span> </label>
                <input
                  type="text"
                  placeholder="Enter Short Name"
                  class="form-control"
                  id="mobile_number"
                  v-model="form.mobile_number"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="short_name">Select Gender <span>*</span> </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender1"
                  />
                  <label class="form-check-label" for="gender1">
                    Male
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender1"
                  />
                  <label class="form-check-label" for="gender1">
                    Female
                  </label>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="blood">Blood Group <span>*</span> </label>
                <select name="blood" id="blood" v-model="blood" class="form-control">
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <textarea
                id="address"
                cols="30"
                rows="10"
                class="form-control"
                v-model="form.address"
                placeholder="Address...."
              ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <!-- END Full Table -->
    </div>
    <!-- END Page Content -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: this.initForm(),
    };
  },
  methods: {
    initForm() {
      return {
        name: null,
        gender: null,
        mobile_number: null,
        blood: null,
        address: null,
        image: null,
        card_no: null,
      };
    },
  },
};
</script>

<style></style>
