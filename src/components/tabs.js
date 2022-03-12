import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement("div");
  const javascript = document.createElement("div");
  const bootstrap = document.createElement("div");
  const technology = document.createElement("div");
  const jquery = document.createElement("div");
  const nodeJs = document.createElement("div");

 
  topicsDiv.classList.add("topics");
  javascript.classList.add("tab");
  bootstrap.classList.add("tab");
  technology.classList.add("tab");
  jquery.classList.add("tab");
  nodeJs.classList.add("tab");

  javascript.textContent = topics;
  bootstrap.textContent = topics;
  technology.textContent = topics;
  jquery.textContent = topics;
  nodeJs.textContent = topics;


  topicsDiv.appendChild(javascript, bootstrap, technology);


  return topicsDiv;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabSelector = document.querySelector(selector);
  console.log(tabSelector)

  axios.get("http://localhost:5000/api/topics")
    .then(res => {
      console.log(res.data.topics)

      res.data.topics.forEach(elem => {
        const tabMaker = Tabs(elem);
        console.log(tabMaker)
        tabSelector.appendChild(tabMaker)
      })

    })



}

export { Tabs, tabsAppender }
