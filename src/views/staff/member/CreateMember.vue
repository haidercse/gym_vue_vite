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
                :to="{name: 'member'}"
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
                  <label for="name">Organization Name <span>*</span> </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                  
                    placeholder="Enter Organization Name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="short_name">Short Name <span>*</span> </label>
                  <input
                    type="text"
                    placeholder="Enter Short Name"
                    class="form-control"
                    id="short_name"
                   
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <textarea
                  id="address"
                  cols="30"
                  rows="10"
                
                  class="form-control"
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

}
</script>

<style>

</style>