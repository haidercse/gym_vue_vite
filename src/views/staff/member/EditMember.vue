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
       
        <ShowError></ShowError>
        <div class="block-content">
          <form @submit.prevent="updateForm()" enctype="multipart/form-data">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Member Name <span>*</span> </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
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
                    value="1"
                    v-model="form.gender"
                  />
                  <label class="form-check-label" for="gender1"> Male </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender1"
                    v-model="form.gender"
                    value="0"
                  />
                  <label class="form-check-label" for="gender1"> Female </label>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="blood">Blood Group <span>*</span> </label>
                <select
                  name="blood"
                  id="blood"
                  v-model="form.blood"
                  class="form-control"
                >
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
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="image">Image <span>*</span> </label>
                <input
                  type="file"
                  class="form-control"
                  id="image"
                  @change="selectImage"
                />
              </div>
              <div class="form-group col-md-6">
                <img
                v-if="form.clickImage == ''"
                  :src="form.image"
                  alt=""
                  style="height: 250px; width: 250px"
                  class="ml-5"
                  id="img_preview"
                />
                <img
                  v-if="form.clickImage"
                  :src="form.clickImage"
                  alt=""
                  style="height: 250px; width: 250px"
                  class="ml-5"
                  id="img_preview"
                />
              </div>
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
import { mapActions, mapState } from "vuex";
import ShowError from "../../../components/utilities/ShowError.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      form: {
        name: '',
        gender: null,
        mobile_number: null,
        blood: "",
        address: null,
        image: "",
        clickImage: "",
      },
    };
  },

  mounted() {
    this.getMember(this.id);
    setTimeout(() => {
      this.form.name = this.get_member.name;
      this.form.mobile_number = this.get_member.mobile_number;
      this.form.gender = this.get_member.gender;
      this.form.blood = this.get_member.blood;
      this.form.address = this.get_member.address;
      this.form.image = this.get_member.image;
    }, 2000);
   
  },
  components: { ShowError },
  computed: {
    ...mapState({
      get_member: (state) => state.member.member,
    }),
  },
  methods: {
    ...mapActions(["memberEdit", "getMember"]),

    updateForm() {
      let data = new FormData();
      data.append("_method", 'PUT');
      data.append("name", this.form.name);
      data.append("gender", this.form.gender);
      data.append("mobile_number", this.form.mobile_number);
      data.append("blood", this.form.blood);
      data.append("address", this.form.address);
      if(this.form.clickImage !== ''){
        data.append("image", this.form.image);
      }

      let payload = {
        data: data,
        id: this.id
      }
      
      this.memberEdit(payload);
    },

    selectImage(e) {
      let image = e.target.files[0];
      this.form.image = image;
      this.read(image);
    },
    read(image) {
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.form.clickImage = e.target.result;
        // this.form.image = e.target.result;
      };
    },
  },
};
</script>

<style></style>
