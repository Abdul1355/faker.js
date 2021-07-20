/**
 *
 * @namespace faker.books
 */
 var Books = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * books
     *
     * @method faker.books.books
     */
    self.books = function () {
      return fake('{{books.author}} {{books.fiction}} {{books.nonfiction}}');
    };
  
    self.books.schema = {
      "description": "Generates a random bookname.",
      "sampleResults": ["Absalom", "After Many a Summer Dies the Swan", "Ah, Wilderness!"]
    };
  
    /**
     * author
     *
     * @method faker.books.author
     */
    self.author = function () {
      return faker.random.arrayElement(faker.definitions.books.author);
    };
  
    self.author.schema = {
      "description": "Generates a author's name.",
      "sampleResults": ["William Faulkner", "Carlo Fruttero", "Aldous Huxley"]
    };
  
  
    /**
     * type
     *
     * @method faker.books.fiction
     */
    self.fiction = function () {
      return faker.random.arrayElement(faker.definitions.books.fiction);
    };
  
    self.fiction.schema = {
      "description": "Generates type of a book",
      "sampleResults": ["Action and adventure", "Alternate history", "Drama"]
    };
    

    self.nonfiction = function () {
        return faker.random.arrayElement(faker.definitions.books.nonfiction);
      };
    
      self.nonfiction.schema = {
        "description": "Generates type of a book",
        "sampleResults": ["Diary", "Dictionary", "DramaEncyclopedia"]
      };
  
    /**
     * pages
     *
     * @method faker.books.page
     */
    self.pages = function () {
      return faker.random.arrayElement(faker.definitions.books.page);
    };
  
    self.pages.schema = {
      "description": "Generates number of pages.",
      "sampleResults": ["112", "250", "330", "282"]
    };
  
    /**
     * country of origin
     *
     * @method faker.books.cfo
     */
    self.cfo = function () {
        return faker.random.arrayElement(faker.definitions.books.cfo);
    };
  
    self.cfo.schema = {
      "description": "Generates Country of Origin",
      "sampleResults": ["Germany", "Italy", "Spain"]
    };
  };
  
  module["exports"] = Books;