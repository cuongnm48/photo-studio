export interface Dictionary {
  metadata: {
    title: string
    description: string
  }
  home: {
    services: {
      title: string
      subtitle: string
      items: Array<{
        title: string
        description: string
        link: string
      }>
      view_details: string
    }
    photo_editing: {
      title: string
      subtitle: string
      services: Array<{
        title: string
        description: string
      }>
    }
    about: {
      title: string
      content: string[]
    }
    contact: {
      title: string
      subtitle: string
      address: string
      business_hours: {
        title: string
        weekday: string
        weekend: string
      }
    }
  }
}
