export var template_three = `<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 90%;
  margin: 10px;
  border: 1px solid red;
}
pthree {
  font-size: 10px;
}
bthree {
  font-size: 7px;
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
  }
}
@media (min-width: 1281px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    height: 90%;
    margin: 10px;
  }
}

.container {
  padding: 0px 0px;
}
.userImageStyle {
  width: 90px;
  height: 90px;
}

.section1 {
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 215px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: auto;
  border: 1px solid orange;
  border-radius: 10px;

  padding: 10px;
}
.section1_1 {
  flex: 0.5;
  display: flex;
  background: rgba(65, 55, 56, 0.274);
  flex-direction: column;
  margin: 0px;
  padding: 10px;
  justify-content: center;
  justify-items: center;
}
.section1_2 {
  flex: 1.5;
  display: flex;
  padding: 10px;
  border: 1px solid red;
  margin: 0px;
}
.section1_1_boxing {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.section_1_1_imge {
  display: flex;
  justify-content: flex-end;
}
.section_1_1_event_text {
  display: flex;
  justify-content: flex-end;
}
</style>
<!-- 394 * 216 responisive template mandatory -->
<body>
<div class="section1">
  <div class="section1_1">
    <div class="section1_1_boxing">
      <div class="section_1_1_imge">
        <img
          class="userImageStyle"
          src="data:image/jpeg;base64,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"
          alt="Smiley face"
        />
      </div>
      <div class="section_1_1_event_text">
        <p>Event Name</p>
      </div>
      <div class="section_1_1_event_text">
        <p>Name Of Candidate</p>
      </div>
    </div>
  </div>
  <div class="section1_2">
    <pthree>
      We are glad to share that today <b>Candidate Name Here</bthree><br />
      has sucessfully completed <b>Number of years</b> of association<br />
      with <bthree>Azilen!</bthree>
      <bthree>Candidate Name</b> is hard working and a good team player<br />
      who is always available when required. He is <br />
      dedicated towards his work required following processes.
      <br />
      <bthree>Candidate Name</bthree>, We are glad to have you as a part of our <br />
      Azilen team and wish you continued success.
    </pthree>
  </div>
</div>
</body>
`;
