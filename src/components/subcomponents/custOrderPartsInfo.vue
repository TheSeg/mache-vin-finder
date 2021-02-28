<template>
    <div v-for="header in rootObject" :key="header.name">
        <template v-if="header.hasVisible">
            <h3 v-html="header.name" />
            <table class="table text-light">
                <tbody>
                    <template v-for="part in header.parts" :key="part.attributes.werscode">
                    <tr v-if="part.attributes.isVisible === 'true'">
                        <td>
                            <span v-html="part.attributes.description" />
                            <template v-if="part.attributes.BP2_PartDescriptions_Interior_Trim_Colour">
                                <em> in <span v-html="part.attributes.BP2_PartDescriptions_Interior_Trim_Colour" /></em>
                            </template>
                        </td>
                    </tr>
                    </template>
                </tbody>
            </table>
        </template>
    </div>
</template>

<script>
export default {
  name: 'CustOrderPartsInfo',
  props: {
    rootObject: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.rootObject.forEach((header) => {
      header.hasVisible = false
      header.parts.forEach((part) => {
        if (part.attributes.isVisible === 'true') {
          header.hasVisible = true
        }
      })
    })
  }
}
</script>
