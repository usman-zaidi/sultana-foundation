<template>
        <CCol :xs="12" >
            <CCard>
                <CRow>
                    <CCol :xs="12">
                <CCardHeader>
                    <h3>Donor Detail</h3>
                </CCardHeader>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol :xs="8">
                <CCardBody class="p-4">
                    <VueFormWizard
                squared-tabs
                card-background
                navigable-tabs
                scrollable-tabs
                :nextButton="{
          text: 'Next',
          icon: 'Back',
          hideIcon: false, // default false but selected for sample
          hideText: false, // default false but selected for sample
        }"
                :custom-tabs="tabs"
                :beforeChange="onTabBeforeChange"
                @change="onChangeCurrentTab"
                @complete:wizard="wizardCompleted"
            >
                <div v-if="currentTabIndex === 0">
                    <CForm class="row ">

                        <CCol :md="6">
                            <CFormLabel for="inputName">Reg No # </CFormLabel>
                            <CFormInput v-model="regNo" id="inputName" type="text" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputBGroup">Donors Type</CFormLabel>
                            <CFormSelect @change="onChange($event)" id="inputBGroup">
                                <option>Choose...</option>
                                <option value="wd">Walking Donor</option>
                                <option value="cd">Campaign Donor</option>
                                <option value="sd">Sponsored Donor</option>
                            </CFormSelect>
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Name</CFormLabel>
                            <CFormInput v-model="name" id="inputName" type="text" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Father Name</CFormLabel>
                            <CFormInput v-model="fName" id="inputName" type="text" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Date of Birth</CFormLabel>
                            <CFormInput v-model="dob" id="inputName" type="date" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Weight</CFormLabel>
                            <CFormInput v-model="weight" id="inputName" type="text" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputBGroup">Blood Group</CFormLabel>
                            <CFormSelect id="inputBGroup">
                                <option>Choose...</option>
                                <option>...</option>
                            </CFormSelect>
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Last Donation</CFormLabel>
                            <CFormInput v-model="lastDonation" id="inputName" type="date" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">No of Donation</CFormLabel>
                            <CFormInput v-model="noOfDonation" id="inputName" type="number" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Institute/Office/Res</CFormLabel>
                            <CFormInput v-model="address" id="inputName" type="text" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Class</CFormLabel>
                            <CFormInput v-model="class" id="inputName" type="text" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Tel #</CFormLabel>
                            <CFormInput v-model="tel" id="inputName" type="text" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Contact #</CFormLabel>
                            <CFormInput v-model="contact" id="inputName" type="text" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputEmail4">Email</CFormLabel>
                            <CFormInput v-model="email" id="inputEmail4" type="email" />
                        </CCol>




                        <CCol :md="6">
                            <CFormLabel class="p-2">Gender</CFormLabel>
                        <input
                            id="validationFormCheck2"
                            type="radio"
                            name="gender"
                            v-model="gender"
                            label="Male"
                            required
                        /> Male
                        <input
                            id="validationFormCheck3"
                            type="radio"
                            name="gender"
                            v-model="gender"
                            label="Female"
                            required
                        /> Female
                        </CCol>
                    </CForm>
                </div>
                <div v-if="currentTabIndex === 1">
                    <CForm class="row ">
                        <CCol :md="4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                           Fainting
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Fainting
                        </label>
                    </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                        </CCol>
                        <CCol :md="4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                        </CCol>
                        <CCol :md="4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Fainting
                                </label>
                            </div>
                        </CCol>
                    </CForm>
                </div>

                <div v-if="currentTabIndex === 2 && donorType=='sd'">
                    <CForm class="row ">
                        <CCol :md="6">
                            <CFormLabel for="inputCNIC">File #</CFormLabel>
                            <CFormInput id="inputCNIC" type="text" placeholder="......" />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Paitent Name</CFormLabel>
                            <CFormInput id="inputName" type="text" />
                        </CCol>
                    </CForm>
                </div>
                <h5 v-if="currentTabIndex === 3">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Are you agree with the terms and condition!
                    </label>
                </div>
                </h5>
            </VueFormWizard>
                </CCardBody>
                    </CCol>
                </CRow>

            </CCard>
        </CCol>


</template>

<script>
import VueFormWizard from 'form-wizard-vue3'
import 'form-wizard-vue3/dist/form-wizard-vue3.css'

export default {
    name: "add-donors",
    components:{
        VueFormWizard,
    },
    data() {
        return {
            tabs:[
                {
                    title: 'Basic Information',
                },
                {
                    title: 'Questions',
                },
                {
                    title: 'Sponsored',
                },
                {
                    title: 'Agreement',
                },
            ],
            regNo:'',
            name:'',
            fName:'',
            dob:'',
            weight:'',
            bloodGroup:'',
            lastDonation:'',
            noOfDonation:'',
            address:'',
            class:'',
            tel:'',
            contact:'',
            email:'',
            gender:'',
            donorType:'',
            currentTabIndex: 0,
        };
    },
    methods: {
        onChangeCurrentTab(index, oldIndex) {
            console.log(index, oldIndex);
            this.currentTabIndex = index;
        },
        onTabBeforeChange() {
            if (this.currentTabIndex === 0) {
                console.log('First Tab');
            }
            console.log('All Tabs');
        },
        wizardCompleted() {
            console.log('Wizard Completed');
        },
        onChange(event){
          this.donorType= event.target.value;
        },
    }
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
