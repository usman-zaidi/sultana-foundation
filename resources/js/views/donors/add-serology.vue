<template>
    <CRow>
        <CCol :xs="12">
            <CCard>
                <CRow>
                    <CCol :xs="12">
                        <CCardHeader>
                            <h3>Add Blood Collection</h3>
                        </CCardHeader>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol :xs="12" :md="8">
                        <CCardBody class="p-4">
                            <CCard class="p-4">
                                <CForm>
                                    <CRow>
                                        <CCol xs:="12" :md="6">
                                            <CFormLabel for="inputBGroup">Select Donor</CFormLabel>
                                            <CFormSelect id="inputBGroup">
                                                <option>Choose...</option>
                                                <option value="wd">.....</option>
                                                <option value="cd">.....</option>
                                            </CFormSelect>
                                        </CCol>
                                    </CRow>
                                    <CRow class="pt-4">
                                        <h6>Blood Flow</h6>
                                    </CRow>
                                    <CRow>
                                        <CCol xs:="12"  :md="3">

                                            <CFormLabel for="inputName">START</CFormLabel>
                                            <CFormInput id="inputName" placeholder="Hr/Min" type="text" />
                                        </CCol>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">END</CFormLabel>
                                            <CFormInput id="inputName" placeholder="Hr/Min" type="text" />

                                        </CCol>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">VEIN</CFormLabel>
                                            <CFormInput id="inputName" placeholder="Hr/Min" type="text" />

                                        </CCol>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">TOTAL TIME</CFormLabel>
                                            <CFormInput id="inputName" placeholder="Hr/Min" type="text" />

                                        </CCol>
                                    </CRow>
                                    <CRow class="pt-4">
                                        <CCol xs:="12" :md="6">
                                            <CFormLabel for="inputBGroup">Select Blood Bag</CFormLabel>
                                            <CFormSelect id="inputBGroup">
                                                <option>Choose...</option>
                                                <option value="1">SINGLE</option>
                                                <option value="2">DOUBLE</option>
                                                <option value="3">TRIPLE</option>
                                            </CFormSelect>
                                        </CCol>
                                    </CRow>
                                    <CRow class="pt-4">
                                        <h6>Voltaken</h6>
                                    </CRow>

                                    <CRow>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">WB</CFormLabel>
                                            <CFormInput id="inputName" placeholder="ml" type="text" />
                                        </CCol>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">PRBC</CFormLabel>
                                            <CFormInput id="inputName" placeholder="ml" type="text" />

                                        </CCol>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">FFP</CFormLabel>
                                            <CFormInput id="inputName" placeholder="ml" type="text" />

                                        </CCol>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">PLTS</CFormLabel>
                                            <CFormInput id="inputName" placeholder="ml" type="text" />

                                        </CCol>
                                    </CRow>
                                    <CRow class="pt-4">
                                        <h6>Problems</h6>
                                    </CRow>

                                    <CRow>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">OVER COLL</CFormLabel>
                                            <CFormInput id="inputName"  type="text" />
                                        </CCol>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">LOW COLL</CFormLabel>
                                            <CFormInput id="inputName"  type="text" />

                                        </CCol>
                                        <CCol xs:="12"  :md="3">
                                            <CFormLabel for="inputName">FAIR COLL</CFormLabel>
                                            <CFormInput id="inputName"  type="text" />

                                        </CCol>
                                    </CRow>
                                    <CCol :xs="12" class="pt-4">
                                        <CButton type="submit" color="primary">Add Collection</CButton>
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
    name: "add-serology"
}
</script>

<style scoped>

</style>
