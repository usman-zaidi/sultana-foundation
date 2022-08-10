<template>
    <CRow>
        <CCol :xs="8" class="offset-2" >

                    <CCard>
                        <CCardBody class="p-4">
                            <CForm class="row ">
                                <h1>Walking Blood Donor</h1>
                                <p class="text-medium-emphasis">Add Donor</p>
                                <CCol :md="6">
                                    <CFormLabel for="inputName">Name</CFormLabel>
                                    <CFormInput id="inputName" type="text" />
                                </CCol>
                                <CCol :md="6">
                                    <CFormLabel for="inputFName">Father Name</CFormLabel>
                                    <CFormInput id="inputFName" type="text" />
                                </CCol>
                                <CCol :md="6">
                                    <CFormLabel for="inputCNIC">CNIC</CFormLabel>
                                    <CFormInput id="inputCNIC" type="text" placeholder="37405-2920905-5" />
                                </CCol>
                                <CCol :md="6">
                                    <CFormLabel for="inputBGroup">Blood Group</CFormLabel>
                                    <CFormSelect id="inputBGroup">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </CFormSelect>
                                </CCol>

                                <CCol :xs="12">
                                    <CFormLabel for="inputCNumber">Contact#</CFormLabel>
                                    <CFormInput
                                        id="inputCNumber"
                                        placeholder="0341-5327629"
                                    />
                                </CCol>
                                <CCol :md="6">
                                    <CFormLabel for="inputCity">City</CFormLabel>
                                    <CFormInput id="inputCity" />
                                </CCol>
                                <CCol :md="4">
                                    <CFormLabel for="inputState">State</CFormLabel>
                                    <CFormSelect id="inputState">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </CFormSelect>
                                </CCol>

                                <CCol :xs="12" class="pt-4">
                                    <CButton type="submit" color="primary">Add Donor</CButton>
                                </CCol>
                            </CForm>
                        </CCardBody>
                    </CCard>
        </CCol>
    </CRow>
</template>

<script>
export default {
    name: "Add Donnors"
}
</script>

<style scoped>

</style>
