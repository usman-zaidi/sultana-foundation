<template>
    <CRow>
        <CCol :xs="12">
            <CCard>
                <CRow>
                    <CCol :xs="12">
                        <CCardHeader>
                            <h3>Add Serology</h3>
                        </CCardHeader>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol :xs="12" :md="8">
                        <CCardBody class="p-4">
                            <CCard class="p-4">
                                <CForm >
                                    <CRow>
                                        <CCol :md="4">
                                            <CFormLabel for="inputState">Select Donor</CFormLabel>
                                            <CFormSelect id="inputState">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </CFormSelect>
                                        </CCol>

                                        <CCol :md="4">
                                            <CFormLabel for="inputFName">Intial Testing Date</CFormLabel>
                                            <CFormInput id="inputFName"  type="date"/>
                                        </CCol>
                                        <CCol :md="4">
                                            <CFormLabel for="inputFName">Repeat Testing Date</CFormLabel>
                                            <CFormInput id="inputFName" type="date"/>
                                        </CCol>

                                    </CRow>
                                    <CRow>
                                        <CCol :md="4">
                                            <CFormLabel for="inputState">Select Test</CFormLabel>
                                            <CFormSelect id="inputState">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </CFormSelect>
                                        </CCol>

                                        <CCol :md="4">
                                            <CFormLabel for="inputFName">C/OVAL</CFormLabel>
                                            <CFormInput id="inputFName" v-model="coval" type="text"/>
                                        </CCol>
                                        <CCol :md="4">
                                            <CFormLabel for="inputFName">DON_VAL</CFormLabel>
                                            <CFormInput id="inputFName" v-model="donval" type="text"/>
                                        </CCol>
                                        <CCol :md="4">
                                            <CFormLabel for="inputFName">RESULT</CFormLabel>
                                            <CFormInput id="inputFName" v-model="res" type="text"/>
                                        </CCol>
                                        <CCol :md="4">
                                            <CFormLabel for="inputFName">LAB TECH</CFormLabel>
                                            <CFormInput id="inputFName" v-model="labtech" type="text"/>
                                        </CCol>
                                        <CCol :md="4" class="pt-4">
                                            <CButton type="button" @click="onSubmit" class=" p-2" color="primary">Add Serology
                                            </CButton>
                                        </CCol>
                                    </CRow>


                                    <table class="table mt-5">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">C/OVAL</th>
                                            <th scope="col">DON_VAL</th>
                                            <th scope="col">Result</th>
                                            <th scope="col">LAB TECH</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(entry, i) in sortedList" :key="i">
                                            <th scope="row">{{ ++i }}</th>
                                            <td>{{ entry.coval }}</td>
                                            <td>{{ entry.donval }}</td>
                                            <td>{{ entry.res }}</td>
                                            <td>{{ entry.labtech }}</td>
                                            <td><a @click="removeElement(i)">
                                                <font-awesome-icon icon="fa-solid fa-delete-left" class="p-2"/></a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </CForm>
                            </CCard>
                        </CCardBody>
                    </CCol>
                </CRow>>

            </CCard>
        </CCol>
    </CRow>
</template>

<script>
export default {
    name: "add-serology",
    data: () => ({coval: "",donval: "",res: "",labtech: "", allSerologyValues: []}),
    computed: {
        sortedList: function () {
            return this.allSerologyValues.slice().sort(function (a, b) {
                return b.name - a.name;
            });
        },
    },
    methods: {
        onSubmit() {
            this.allSerologyValues.push({coval: this.coval,donval:this.donval,res: this.res,labtech:this.labtech});
            this.clearForm();
        },
        clearForm() {
            this.coval = "";
            this.donval = "";
            this.res = "";
            this.labtech="";
        },
        removeElement: function (index) {
            this.allSerologyValues.splice(index - 1, 1);
        }
    },
}
</script>

<style scoped>

</style>
