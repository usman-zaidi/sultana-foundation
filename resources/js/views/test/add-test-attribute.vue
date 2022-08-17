<template>
    <CRow>
        <CCol :xs="12">
            <CCard>
                <CRow>
                    <CCol :xs="12">
                        <CCardHeader>
                            <h3>Add Test Attribute</h3>
                        </CCardHeader>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol :xs="12" :md="6">
                        <CCardBody class="p-4">
                            <CCard class="p-4">
                        <CForm >
                            <CRow>
                           <CCol :md="4">

                                <CFormLabel for="inputState">Select Test</CFormLabel>
                                <CFormSelect id="inputState">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </CFormSelect>
                            </CCol>

                            <CCol :md="4">
                                <CFormLabel for="inputFName">Attribute Name</CFormLabel>
                                <CFormInput id="inputFName" v-model="name" type="text"/>
                            </CCol>
                                <CCol :md="4" class="pt-4">
                                    <CButton type="button" @click="onSubmit" class=" p-2" color="primary">Add Attribute
                                    </CButton>
                                </CCol>
                            </CRow>


                            <table class="table mt-5">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(entry, i) in sortedList" :key="i">
                                    <th scope="row">{{ ++i }}</th>
                                    <td>{{ entry.name }}</td>
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
    name: "add-test-attribute",
    data: () => ({name: "", allAttributes: []}),
    computed: {
        sortedList: function () {
            return this.allAttributes.slice().sort(function (a, b) {
                return b.name - a.name;
            });
        },
    },
    methods: {
        onSubmit() {
            this.allAttributes.push({name: this.name});
            this.clearForm();
        },
        clearForm() {
            this.name = "";
        },
        removeElement: function (index) {
            this.allAttributes.splice(index - 1, 1);
        }
    },
}
</script>

<style scoped>

</style>
