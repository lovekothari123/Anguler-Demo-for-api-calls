export var template_one = `
<style>
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
  h4two {
    font-size: 0px;
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
  .second_template_section_11 {
    flex: 1;
    display: flex;
    flex-direction: column;

    background: linear-gradient(to top right, #ffffff 0%, #80808005 30%);
  }
  .second_template_section_23 {
    flex: 1;
    display: flex;
    flex-direction: column;

    background: linear-gradient(to top right, red 0%, #ffffff 20%);
  }
  bcolor {
    color: #000;
  }
  pcolor {
    color: red;
  }
</style>
<!-- 394 * 216 responisive template mandatory -->
<div class="second_template_section">
  <div class="second_template_section_11">
    <img
      class="userImageStyle"
      src="data:image/jpeg;base64,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"
      alt="Smiley face"
    />
    <h4><bcolor>Event Name</bcolor></h4>
    <pcolor>Name Of Candidate</pcolor>
  </div>

  <div class="second_template_section_23">
    <ptwo>
      I have created a simple APIG Api with 1 <btwo>resource called 'abc'</btwo>
    </ptwo>

    <h4>added 2 methods GET and POST both with Authorization set to</h4>

    <ptwo><btwo>NONE and API Key Required set to false, </btwo></ptwo>

    <h4two>everything deployed to a stage called 'dev'.</h4two>
  </div>
</div>


`;
