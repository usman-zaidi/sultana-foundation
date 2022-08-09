<template>
    <CCard>
        <CCardBody class="p-4">
            <CForm class="row ">
                <h1>Patient Detail</h1>
                <p class="text-medium-emphasis">Add Patient</p>
                <CCol :md="6">
                    <CFormLabel for="inputName">Patient Name</CFormLabel>
                    <CFormInput id="inputName" type="text" />
                </CCol>
                <CCol :md="6">
                    <CFormLabel for="inputFName">Father's Name</CFormLabel>
                    <CFormInput id="inputFName" type="text" />
                </CCol>
                <CCol :md="6">
                    <CFormLabel for="inputFName">Mother's Name</CFormLabel>
                    <CFormInput id="inputFName" type="text" />
                </CCol>
                <CCol :md="6">
                    <CFormLabel for="inputFName">Patient Age</CFormLabel>
                    <CFormInput id="inputFName" type="text" />
                </CCol>
                <CCol :md="6">
                    <CFormLabel for="inputFName">Mother's Age</CFormLabel>
                    <CFormInput id="inputFName" type="text" />
                </CCol>
                <CCol :md="6">
                    <CFormLabel for="inputCNIC">Financial Status</CFormLabel>
                    <CFormInput id="inputCNIC" type="text" />
                </CCol>

                <CCol :xs="12">
                    <CFormLabel for="inputCNumber">Contact#</CFormLabel>
                    <CFormInput
                        id="inputCNumber"
                        placeholder="0341-5327629"
                    />
                </CCol>
                <CCol :md="6">
                    <CFormLabel for="inputCity">Registration Status</CFormLabel>
                    <CFormInput id="inputCity" type="text" />
                </CCol>
                <CCol :md="6">
                    <CFormLabel for="inputCity">Result of CVS Reports</CFormLabel>
                    <CFormInput id="inputCity" type="text" />
                </CCol>

                <CCol :xs="12" class="pt-4">
                    <CButton type="submit" color="primary">Add Patient</CButton>
                </CCol>
            </CForm>
        </CCardBody>
    </CCard>
</template>

<script>
export default {
    name: "add-patient"
}
</script>

<style scoped>

</style>
