let intl, intl1, intl2;
window.onload = function () {
  let e = document.getElementById("phoneNumber");
  intl = window.intlTelInput(e, {
    separateDialCode: !0,
    initialCountry: "IN",
    onlyCountries: [
      "AU",
      "BT",
      "BR",
      "CA",
      "CN",
      "DE",
      "HK",
      "IN",
      "IT",
      "JP",
      "KW",
      "MY",
      "MV",
      "NP",
      "QA",
      "SA",
      "SG",
      "LK",
      "TH",
      "AE",
    ],
  });
  let t = document.getElementById("phone");
  intl1 = window.intlTelInput(t, {
    separateDialCode: !0,
    initialCountry: "IN",
    onlyCountries: [
      "AU",
      "BT",
      "BR",
      "CA",
      "CN",
      "DE",
      "HK",
      "IN",
      "IT",
      "JP",
      "KW",
      "MY",
      "MV",
      "NP",
      "QA",
      "SA",
      "SG",
      "LK",
      "TH",
      "AE",
    ],
  });
  let n = document.getElementById("phone1");
  (intl2 = window.intlTelInput(n, {
    separateDialCode: !0,
    initialCountry: "IN",
    onlyCountries: [
      "AU",
      "BT",
      "BR",
      "CA",
      "CN",
      "DE",
      "HK",
      "IN",
      "IT",
      "JP",
      "KW",
      "MY",
      "MV",
      "NP",
      "QA",
      "SA",
      "SG",
      "LK",
      "TH",
      "AE",
    ],
  })),
    checkNumber(document.getElementById("phoneNumber")),
    checkNumber(document.getElementById("phone")),
    checkNumber(document.getElementById("phone1")),
    document.querySelectorAll(".otpInput").forEach((e) => {
      checkNumber(e);
    });
};
const getDeviceType = () =>
  /Android/i.test(navigator.userAgent)
    ? "Android"
    : /iPad|iPhone|iPod/.test(navigator.userAgent)
    ? "Ios"
    : /Win/i.test(navigator.userAgent)
    ? "Windows"
    : /Mac/i.test(navigator.userAgent)
    ? "Osx"
    : void 0;
function checkNumber(e) {
  e.addEventListener("input", () => {
    let t = e.value,
      n = t.replace(/[^0-9]/g, "");
    e.value = n;
  });
}
function readMore() {
  (document.getElementById("displayMore").style.display = "block"),
    (document.getElementById("read").style.display = "none"),
    (document.getElementById("readLess2").style.display = "block");
}
function readMoretwo() {
  (document.getElementById("displayMoreTwo").style.display = "inline"),
    (document.getElementById("readTwo").style.display = "none"),
    (document.getElementById("readLess1").style.display = "inline");
}
function readLess() {
  (document.getElementById("displayMoreTwo").style.display = "none"),
    (document.getElementById("readTwo").style.display = "block"),
    (document.getElementById("readLess1").style.display = "none");
}
function readLess2() {
  (document.getElementById("displayMore").style.display = "none"),
    (document.getElementById("read").style.display = "block"),
    (document.getElementById("readLess2").style.display = "none");
}
function readMore3() {
  (document.getElementById("displayMoreThree").style.display = "inline"),
    (document.getElementById("displayLessThree").style.display = "none"),
    (document.getElementById("readLessButton").style.display = "inline");
}
function readLess3() {
  (document.getElementById("displayMoreThree").style.display = "none"),
    (document.getElementById("displayLessThree").style.display = "block"),
    (document.getElementById("readLessButton").style.display = "none");
}
function checkInputs(e, t, n) {
  let l = e.some((e) => "" === e.value.trim()) || !n.checked;
  t.disabled = l;
}
function checkInputs1(e, t) {
  let n = e.some((e) => "" === e.value.trim());
  t.disabled = n;
}
window.addEventListener(
  "load",
  (e) => {
    let t = document.querySelectorAll("input[type='checkbox']"),
      n = document.querySelectorAll(
        ".enquirySubMain input:not(input[type='checkbox'])",
      );
    checkInputs(
      [...n].splice(0, 3),
      document.getElementById("enquirBbutton1"),
      t[0],
    ),
      checkInputs(
        [...n].splice(3),
        document.getElementById("enquirBbutton2"),
        t[2],
      );
    checkInputs(
      [...document.querySelectorAll(".enquirySubSubMain1 input")],
      document.getElementById("enquirBbutton3"),
      t[1],
    );
    let l = document.querySelectorAll(".inutContainer input");
    checkInputs1([...l].splice(0, 4), document.getElementById("otpBbutton1")),
      checkInputs1([...l].splice(4, 4), document.getElementById("otpBbutton3")),
      checkInputs1([...l].splice(8), document.getElementById("otpBbutton2"));
  },
  !1,
),
  window.addEventListener(
    "input",
    (e) => {
      let t = document.querySelectorAll("input[type='checkbox']"),
        n = document.querySelectorAll(
          ".enquirySubMain input:not(input[type='checkbox'])",
        );
      checkInputs(
        [...n].splice(0, 3),
        document.getElementById("enquirBbutton1"),
        t[0],
      ),
        checkInputs(
          [...n].splice(3),
          document.getElementById("enquirBbutton2"),
          t[2],
        );
      checkInputs(
        [...document.querySelectorAll(".enquirySubSubMain1 input")],
        document.getElementById("enquirBbutton3"),
        t[1],
      );
      let l = document.querySelectorAll(".inutContainer input");
      checkInputs1([...l].splice(0, 4), document.getElementById("otpBbutton1")),
        checkInputs1(
          [...l].splice(4, 4),
          document.getElementById("otpBbutton3"),
        ),
        checkInputs1([...l].splice(8), document.getElementById("otpBbutton2"));
    },
    !1,
  ),
  window.addEventListener("load", (e) => {
    setTimeout(() => {
      document.getElementById("callButton").style.display = "flex";
    }, 100);
  });
let target = document.querySelector(".enquiry1"),
  topTarget = document.querySelector(".project-banner");
const callIcon = document.querySelector(".buttonDiv .callIcon"),
  btnDiv = document.querySelector(".buttonDiv"),
  body = document.querySelector("body"),
  hide = () => {
    window.innerWidth <= 768 ||
      btnDiv.setAttribute(
        "style",
        `border-radius: 100%;padding: 0; transform: translateX(calc(100% - ${
          callIcon.getBoundingClientRect().width + 20
        }px)); background-color: transparent;`,
      );
  },
  show = () => {
    window.innerWidth <= 768 || btnDiv.setAttribute("style", "");
  },
  myobserver = new IntersectionObserver(
    (e) => {
      e.forEach((e) => {
        e.isIntersecting &&
          (e.target === target &&
            (hide(),
            btnDiv.addEventListener("mouseenter", show),
            btnDiv.addEventListener("mouseleave", hide)),
          e.target === topTarget &&
            (show(),
            btnDiv.removeEventListener("mouseenter", show),
            btnDiv.removeEventListener("mouseleave", hide)));
      });
    },
    { threshold: 0.2 },
  );
myobserver.observe(topTarget),
  myobserver.observe(target),
  window.addEventListener("load", (e) => {
    setTimeout(() => {
      document.getElementById("modal").style.display = "block";
      let e = document.getElementById("page"),
        t = document.getElementById("callButton");
      e.classList.add("modalBlur"), t.classList.add("modalBlur");
    }, 3e3);
  });
let downloadPdf = !1;
function openModal() {
  document.getElementById("modal").style.display = "block";
  let e = document.getElementById("page"),
    t = document.getElementById("callButton");
  e.classList.add("modalBlur"),
    t.classList.add("modalBlur"),
    (downloadPdf = !0);
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
  let e = document.getElementById("page"),
    t = document.getElementById("callButton");
  e.classList.remove("modalBlur"), t.classList.remove("modalBlur");
}
let responseData;
function openApi(e, t) {
  e.stopPropagation();
  let n = document.getElementById(
    1 == t ? "enquirBbutton1" : 2 == t ? "enquirBbutton2" : "enquirBbutton3",
  );
  (n.style.pointerEvents = "none"),
    (n.innerHTML +=
      "<lottie-player class='loading' id='loading' src='assets/images/loading.json' background='transparent' speed='1' autoplay loop style='width: 50px; height: 50px'></lottie-player>");
  let l =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    (document.getElementById("Email")?.value?.match(l) ||
      document.getElementById("email")?.value?.match(l) ||
      document.getElementById("email1")?.value?.match(l)) &&
    (document.getElementById("Name")?.value ||
      document.getElementById("name")?.value ||
      document.getElementById("name1")?.value) &&
    (document.getElementById("phoneNumber")?.value ||
      document.getElementById("phone")?.value ||
      document.getElementById("phone1")?.value)
  ) {
    let o = window.location.href,
      i = new URLSearchParams(new URL(o).search);
    (utm_source = i.get("utm_source")),
      (utm_campaign = i.get("utm_campaign")),
      (utm_medium = i.get("utm_medium")),
      (utm_content = i.get("utm_content")),
      (utm_terms = i.get("utm_terms"));
    let a = new URLSearchParams(new URL(o).search).get("isOTP"),
      r = utm_campaign || utm_source || utm_content || utm_medium || utm_terms,
      d = {
        phone:
          document.getElementById("phoneNumber")?.value ||
          document.getElementById("phone")?.value ||
          document.getElementById("phone1")?.value,
        name:
          document.getElementById("Name")?.value ||
          document.getElementById("name")?.value ||
          document.getElementById("name1")?.value,
        projectId: 27,
        ...(null != utm_campaign && { campaignCode: utm_campaign }),
        requireOtp: void 0 != a && a,
        email:
          document.getElementById("Email")?.value ||
          document.getElementById("email")?.value ||
          document.getElementById("email1")?.value,
        ...(r && {
          metadata: {
            utm_campaign: utm_campaign,
            utm_content: utm_content,
            utm_medium: utm_medium,
            utm_source: utm_source,
            utm_terms: utm_terms,
          },
        }),
      };
    axios
      .post("http://api-dcrm-dev.fincity.in/open/opportunity", d)
      .then((e) => {
        gtag_report_conversion(),
          a
            ? 1 == t
              ? ((document.getElementById("modalHeader").style.display =
                  "none"),
                (document.getElementById("enquirySubMain").style.display =
                  "none"),
                (document.getElementById("otpVerification").style.display =
                  "flex"),
                (document.querySelector("#numberText").innerHTML =
                  document.querySelector("#numberText").innerText +
                  `<strong> +${intl.getSelectedCountryData()?.dialCode}-${
                    document.getElementById("phoneNumber")?.value
                  }</strong>`),
                (responseData = e))
              : 2 == t
              ? (document
                  .querySelector(".enquiry .section5Header")
                  .setAttribute("style", "display: none"),
                (document.getElementById("enquiryMain").style.display = "none"),
                (document.getElementById("otpVerification1").style.display =
                  "flex"),
                (document.querySelector("#numberText1").innerHTML =
                  document.querySelector("#numberText1").innerText +
                  `<strong> +${intl1.getSelectedCountryData()?.dialCode}-${
                    document.getElementById("phone")?.value
                  }</strong>`),
                (responseData = e))
              : 3 == t &&
                (document
                  .querySelector(".enquiry1 .sectionHeader")
                  .setAttribute("style", "display: none"),
                (document.getElementById("enquiryMain1").style.display =
                  "none"),
                (document.getElementById("otpVerification2").style.display =
                  "flex"),
                (document.querySelector("#numberText2").innerHTML =
                  document.querySelector("#numberText2").innerText +
                  `<strong> +${intl1.getSelectedCountryData()?.dialCode}-${
                    document.getElementById("phone1")?.value
                  }</strong>`),
                (responseData = e))
            : setTimeout(() => {
                window.location.href = "thankyou.html";
              }, 1e3);
      })
      .catch((e) => {
        (document.getElementById(
          1 == t
            ? "enquirBbutton1"
            : 2 == t
            ? "enquirBbutton2"
            : "enquirBbutton3",
        ).style.pointerEvents = "all"),
          (document.getElementById("error").style.display = "block"),
          (document.getElementById("error").innerHTML = e?.message),
          (document.getElementById("error").style.fontSize = "12px"),
          (document.getElementById("error").style.color = "red");
      });
  }
}
function clickEvent(e, t) {
  e.value.length && document.getElementById(t).focus();
}
function moveFocusBack(e) {
  var t = e.target.previousElementSibling;
  "Backspace" === e.key && "" === e.target.value && null != t && t.focus();
}
const optionLocation = { enableHighAccuracy: !0, timeout: 1e4, maximumAge: 0 };
function detectLocation(e, t) {
  document
    .querySelector(
      1 == t
        ? "#locationButton #detect"
        : 2 == t
        ? "#locationButton1 #detect1"
        : "#locationButton2 #detect2",
    )
    .remove(),
    (document.querySelector(
      1 == t ? "#loading" : 2 == t ? "#loading1" : "#loading2",
    ).style.display = "block"),
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
          (e) => {
            delete responseData?.data?.otp;
            let n = {
              token: responseData?.data?.token,
              location: { lat: e?.coords?.latitude, lng: e?.coords?.longitude },
            };
            axios
              .post("http://api-dcrm-dev.fincity.in/open/opportunity/verify", n)
              .then((e) => {
                (document.getElementById(
                  1 == t
                    ? "detectText"
                    : 2 == t
                    ? "detectText1"
                    : "detectText2",
                ).innerText = "Location Detected"),
                  (document.querySelector(
                    1 == t
                      ? "#locationButton #loading"
                      : 2 == t
                      ? "#locationButton1 #loading1"
                      : "#locationButton2 #loading2",
                  ).style.display = "none"),
                  (document.getElementById(
                    1 == t ? "locationButton" : (t = "locationButton1"),
                  ).style.pointerEvents = "none"),
                  (document.querySelector(
                    1 == t
                      ? "#locationButton #timer"
                      : 2 == t
                      ? "#locationButton1 #timer1"
                      : "#locationButton2 #timer2",
                  ).style.display = "block");
              })
              .catch((e) => {});
          },
          (e) => {
            (document.getElementById(
              1 == t ? "detectText" : 2 == t ? "detectText1" : "detectText2",
            ).innerText = "Failed to fetch Location!"),
              (document.getElementById(
                1 == t ? "loading" : 2 == t ? "loading1" : "loading2",
              ).style.display = "none");
          },
          optionLocation,
        )
      : ((document.getElementById(
          1 == t ? "loading" : 2 == t ? "loading1" : "loading2",
        ).style.display = "none"),
        (document.getElementById(
          1 == t ? "detectText" : 2 == t ? "detectText1" : "detectText2",
        ).innerText = "Failed to fetch Location!"));
}
function backMain(e, t) {
  e.stopPropagation(),
    (document.getElementById("modalHeader").style.display = "block"),
    (document.getElementById(
      1 == t
        ? "otpVerification"
        : 2 == t
        ? "otpVerification1"
        : "otpVerification2",
    ).style.display = "none"),
    (document.getElementById(
      1 == t ? "enquirySubMain" : 2 == t ? "enquiryMain" : "enquiryMain1",
    ).style.display = "flex"),
    (document.querySelector(
      1 == t ? "#numberText" : 2 == t ? "#numberText1" : "#numberText2",
    ).innerHTML = "Please Enter the Verification Code sent to"),
    (document.getElementById(
      1 == t ? "enquirBbutton1" : 2 == t ? "enquirBbutton2" : "enquirBbutton3",
    ).style.pointerEvents = "all");
}
function resendOtp(e, t) {
  e.stopPropagation(),
    axios
      .post(
        `http://api-dcrm-dev.fincity.in/open/opportunity/send-otp?token=${responseData?.data?.token}`,
      )
      .then((e) => {
        (document.querySelector(t ? "#resendOtp" : "#resendOtp1").innerText =
          "OTP SENT!"),
          (responseData = e);
      })
      .catch((e) => {});
}
function verfiyOtp(e, t) {
  e.stopPropagation();
  let n =
      document.querySelector(1 == t ? "#_1st" : 2 == t ? "#_1st_" : "#_1st_3")
        ?.value +
      document.querySelector(1 == t ? "#_2nd" : 2 == t ? "#_2nd_" : "#_2nd_3")
        ?.value +
      document.querySelector(1 == t ? "#_3rd" : 2 == t ? "#_3rd_" : "#_3rd_3")
        ?.value +
      document.querySelector(1 == t ? "#_4th" : 2 == t ? "#_4th_" : "#_4th_3")
        ?.value,
    l = { token: responseData?.data?.token, otp: n };
  axios
    .post("http://api-dcrm-dev.fincity.in/open/opportunity/verify", l)
    .then((e) => {
      !0 === downloadPdf &&
        (document.getElementById("pdfDownload").click(), (downloadPdf = !1)),
        (document.getElementById(
          1 == t
            ? "otpVerification"
            : 2 == t
            ? "otpVerification1"
            : "otpVerification2",
        ).style.display = "none"),
        (document.getElementById(
          1 == t ? "location" : 2 == t ? "location1" : "location2",
        ).style.display = "flex");
      let n = 10,
        l = setInterval(() => {
          if (0 == --n) {
            let t = getDeviceType();
            clearInterval(l),
              (window.location.href = `https://dcrm-dev.fincity.com/?&user=consumer&device-type=${t}&token=${e?.data?.consumerToken}&isLandingPage=true`);
          }
        }, 1e3);
    })
    .catch((e) => {});
}

function openModalSlide(imageSource) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  modalImage.src = imageSource;
  modal.classList.add("show");
  modal.style.display = "block";
  document.body.classList.add("modal-open");
  let e = document.getElementById("page"),
    t = document.getElementById("callButton");
  e.classList.add("modalBlurOne"),
    t.classList.add("modalBlurOne"),
    (downloadPdf = !0);
}

function closeModalSlide() {
  var modal = document.getElementById("imageModal");
  modal.classList.remove("show");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
  let e = document.getElementById("page"),
    t = document.getElementById("callButton");
  e.classList.remove("modalBlurOne"), t.classList.remove("modalBlurOne");
}
