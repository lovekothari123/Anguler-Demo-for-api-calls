export var template_two = `<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 90%;
  margin: 10px;
  background: #c7bec1;
}
ptwo {
  font-size: 15px;
}
btwo {
  font-size: 10px;
}
h4two{
  font-size:5px
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
    background: #c7bec1;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
    background: #c7bec1;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
    background: #c7bec1;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
    background: #c7bec1;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
    background: #c7bec1;
  }
}
@media (min-width: 1281px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
    background: #c7bec1;
  }
}

.container {
  padding: 2px 16px;
}
.userImageStyle {
  margin-top: 1%;
  width: 90px;
  height: 90px;
}
.second_template_section {
  flex: 1;
  display: flex;
  flex-direction: row;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: auto;
  border: 1px solid orange;
  border-radius: 10px;

  padding: 10px;
}
.second_template_section_1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  background: linear-gradient(to top right, #99ccff 0%, #ffffcc 10%);
}
.second_template_section_2 {
  flex: 1;
  display: flex;
  flex-direction: column;
    
  background: linear-gradient(to top right, #66ccff 0%, #ffffcc 20%);
}
</style>
<!-- 394 * 216 responisive template mandatory -->
<div class="second_template_section">
<div class="second_template_section_1">
  <img
    class="userImageStyle"
    src="https://media.glassdoor.com/sqll/485585/azilen-technologies-squarelogo-1429595062362.png"
    alt="Smiley face"
  />
  <h4><b>John Doe</b></h4>
  <p>Architect & Engineer</p>
</div>

<div class="second_template_section_2">
  <ptwo>
    I have created a simple APIG Api with 1 <btwo>resource called 'abc'</btwo>
  </ptwo>

  <h4>added 2 methods GET and POST both with Authorization set to</h4>

  <ptwo><btwo>NONE and API Key Required set to false, </btwo></ptwo>

  <h4two>everything deployed to a stage called 'dev'.</h4two>
</div>
</div>


`;
