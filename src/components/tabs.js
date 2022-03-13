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

 topicsDiv.classList.add("topics");
 javascript.classList.add("tab");
 bootstrap.classList.add("tab");
 technology.classList.add("tab");

javascript.textContent = topics[0];
bootstrap.textContent = topics[1];
technology.textContent = topics[2];

topicsDiv.appendChild(javascript);
topicsDiv.appendChild(bootstrap);
topicsDiv.appendChild(technology);


 return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  function creatingDiv(input) {
    const divArr = []
    for (let i = 0; i < input.length; i++) {
      divArr.push(Object.assign(document.createElement('div'), {
        className: 'tab',
        textContent: input[i]
      }))
    }
    return divArr
  }
  
  const tabTopics = (topics) => {
    const divTopics = Object.assign(document.createElement('div'), {
      className: 'topics'
    });
    for (let i = 0; i < topics.length; i++) {
      divTopics.appendChild(topics[i]);
    }
  
    return divTopics
  }
  const tabsContainer = document.querySelector(selector);
  
  axios.get('http://localhost:5000/api/topics')
    .then((resp) => {
      const topicsData = tabTopics(creatingDiv(resp.data.topics))
      tabsContainer.appendChild(topicsData)
    })

    

   


}

export { Tabs, tabsAppender }
