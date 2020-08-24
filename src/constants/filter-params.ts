export const filters = [
  {
	id: 1,
	type: 'Languages',
	name: 'langRestrict',
	options: [
	  {
		name: 'English',
		param: 'en'
	  },
	  {
		name: 'German',
		param: 'de'
	  },
	  {
		name: 'French',
		param: 'fr'
	  }
	]
  },
  {
	id: 2,
	type: 'Content',
	name: 'printType',
	options: [
	  {
		name: 'Books',
		param: 'books'
	  },
	  {
		name: 'Magazines',
		param: 'magazines'
	  },
	  {
		name: 'All content',
		param: 'all'
	  }
	]
  },
  {
	id: 3,
	type: 'Payment',
	name: 'filter',
	options: [
	  {
		name: 'All',
		param: 'ebooks'
	  },
	  {
		name: 'Free',
		param: 'free-ebooks'
	  },
	  {
		name: 'Paid',
		param: 'paid-ebooks'
	  },
	  {
		name: 'Partial',
		param: 'partial'
	  }
	]
  }
]