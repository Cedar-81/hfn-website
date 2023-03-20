const Beaware = () => {
  return (
    <div className=" mt-[7rem]">
      <div className="px-[5%] md:pb-[4rem] text-center">
        <h2 className="text-xl md:text-3xl text-red font-medium">Be Aware.</h2>
        <p className="text-sm leading-snug md:text-base lg:w-[50%] mx-auto mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque sem
          dapibus accumsan ac praesent, magnis faucibus eros nisl orci non.
        </p>
      </div>

      <div className="px-[5%] mt-[4rem] md:flex md:gap-8 lg:gap-[10rem]">
        <div className="bg-black lg:max-h-[20rem] text-white rounded-3xl px-5 py-8">
          <h4 className="text-white text-lg">Haemophilia A</h4>
          <p className="text-sm mt-4">
            Haemophilia A is a rare genetic disorder that affects the blood's
            ability to clot. It is caused by a deficiency in clotting factor
            VIII, which can lead to bleeding episodes that range from mild to
            severe, both internally and externally. Treatment involves regular
            infusions of clotting factor VIII to prevent and manage bleeding
            episodes, as well as to minimize the long-term complications of the
            condition. Living with Haemophilia A can be challenging, but with
            proper care and management, people with the condition can lead
            healthy and fulfilling lives. Raising awareness and understanding of
            Haemophilia A can help promote early diagnosis, effective treatment,
            and a more inclusive and supportive society for those living with
            the condition.
          </p>
        </div>

        <div className="border-2 lg:mt-[10%] md:min-h-[20rem] border-green md:mt-0 mt-8  text-black rounded-3xl px-5 py-8">
          <h4 className="text-lg">Von Willebrand Disease</h4>
          <p className="text-sm mt-4">
            Von Willebrand Disease (VWD) is a genetic bleeding disorder caused
            by a deficiency or dysfunction of von Willebrand factor, a protein
            that helps blood to clot. Symptoms can include frequent nosebleeds,
            heavy menstrual periods, and easy bruising. Treatment may include
            medications that increase von Willebrand factor levels or promote
            blood clotting, as well as avoiding certain medications and
            activities that can increase the risk of bleeding. While VWD can be
            challenging to manage, people with the condition can lead healthy
            and fulfilling lives with proper care and management. Raising
            awareness and understanding of VWD can help promote early diagnosis
            and effective treatment.
          </p>
        </div>
      </div>

      <div className="px-[5%] mt-8 md:flex md:gap-8 md:flex-row-reverse lg:gap-[10rem]">
        <div className="bg-black text-white lg:mt-[10%] md:min-h-[20rem] rounded-3xl px-5 py-8">
          <h4 className="text-white text-lg">Haemophilia B</h4>
          <p className="text-sm mt-4">
            Haemophilia B is a rare genetic bleeding disorder caused by a
            deficiency in clotting factor IX. This deficiency can lead to
            bleeding episodes that range from mild to severe, both internally
            and externally. Treatment involves regular infusions of clotting
            factor IX to prevent and manage bleeding episodes, as well as to
            minimize the long-term complications of the condition. Living with
            Haemophilia B can be challenging, but with proper care and
            management, people with the condition can lead healthy and
            fulfilling lives. Raising awareness and understanding of Haemophilia
            B can help promote early diagnosis, effective treatment, and a more
            inclusive and supportive society for those living with the
            condition.
          </p>
        </div>

        <div className="border-2 md:mt-0 lg:mt-8 lg:max-h-[20rem] border-red text-black mt-8 rounded-3xl px-5 py-8">
          <h4 className="text-lg">Inherited Platelet Disorders</h4>
          <p className="text-sm mt-4">
            Inherited Platelet Disorders (IPDs) are a group of rare genetic
            disorders that affect the platelets in our blood. Platelets are
            essential for clotting, and people with IPDs may have low platelet
            counts or abnormal platelet function, which can cause problems with
            bleeding and bruising. There are several types of IPDs, including
            Glanzmann's thrombasthenia, Bernard-Soulier syndrome, and Gray
            platelet syndrome. Treatment options for IPDs may include medication
            to increase platelet counts or transfusions of platelets. While IPDs
            can be challenging to manage, with proper care and treatment, many
            people with IPDs can lead healthy and fulfilling lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beaware;
