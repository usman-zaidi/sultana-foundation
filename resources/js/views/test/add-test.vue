<template>
    <CRow>
        <CCol :xs="12">
            <CCard>
                <CRow>
                    <CCol :xs="12">
                        <CCardHeader>
                            <h3>Add Test</h3>
                        </CCardHeader>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol :xs="4">
                <CCardBody class="p-4">
                    <CCard class="p-4">
                    <CForm class="row ">

                        <CCol xs:="12" :md="8">
                            <CFormLabel for="inputName">Name</CFormLabel>
                            <CFormInput id="inputName" type="text"/>
                        </CCol>
                        <CCol :xs="12" class="pt-4">
                            <CButton type="submit" color="primary">Add Test</CButton>
                        </CCol>
                    </CForm>
                    </CCard>
                </CCardBody>
                    </CCol>
                </CRow>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>

export default {
    name: "add-test",
}
</script>

<style scoped>

</style>
