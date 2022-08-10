<template>
    <CRow>
        <CCol :xs="8" class="offset-2">
            <CCard>
                <CCardBody class="p-4">
                    <CForm class="row ">
                        <h1>Blood Screening</h1>
                        <CCol :md="6">
                            <CFormLabel for="inputName">Name</CFormLabel>
                            <CFormInput id="inputName" type="text"/>
                        </CCol>
                        <CCol :md="4">
                            <CFormLabel for="inputFName">Age</CFormLabel>
                            <CFormInput id="inputFName" type="text"/>
                        </CCol>
                        <CCol :md="2">
                            <CFormLabel for="inputFName">Sex</CFormLabel>
                            <CFormInput id="inputFName" type="text"/>
                        </CCol>
                        <CCol :xs="12">
                            <CFormLabel for="inputAddress">Address</CFormLabel>
                            <CFormInput id="inputAddress" placeholder="1234 Main St"/>
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputCNumber">Contact#</CFormLabel>
                            <CFormInput
                                id="inputCNumber"
                                placeholder="0341-5327629"
                            />
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputEmail4">Email</CFormLabel>
                            <CFormInput id="inputEmail4" type="email"/>
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputFName">Education</CFormLabel>
                            <CFormInput id="inputFName" type="text"/>
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputFName">Profession</CFormLabel>
                            <CFormInput id="inputFName" type="text"/>
                        </CCol>
                        <CCol :md="6">
                            <CFormLabel for="inputCNIC">Any Thalassaemic in the Family</CFormLabel>
                            <CFormInput id="inputCNIC" type="text"/>
                        </CCol>


                        <CCol :md="6">
                            <CFormLabel for="inputCity">Your Relation with Thalassaemic</CFormLabel>
                            <CFormInput id="inputCity" type="text"/>
                        </CCol>


                        <CCol :xs="12" class="pt-4">
                            <CButton type="submit" color="primary">Add Detail</CButton>
                        </CCol>
                    </CForm>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>
export default {
    name: "blood-screening"
}
</script>

<style scoped>

</style>
