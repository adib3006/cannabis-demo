import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Header from "../components/Header";
import JobStats from "../components/JobStats";
import PostedJobCards from "../components/PostedJobCards";
import PostJobModal from "../components/PostJobModal";
import SearchBar from "../components/SearchBar";

const Job = () => {
  const [title, setTitle] = useState("Job");
  const jobData = [
    {
      title: "Total Job",
      jobNumber: 65,
      increase: "14",
      circularIncrease: 74,
      color: "#186FEF",
      strokeColor: "#E1EAF5",
      iconStyle: {
        backgroundColor: "#E1EAF5",
      },
    },
    {
      title: "Shortlisted",
      jobNumber: 30,
      increase: "06",
      circularIncrease: 60,
      color: "#4CAF50",
      strokeColor: "#E8FFE9",
      iconStyle: {
        backgroundColor: "#E8FFE9",
      },
    },
    {
      title: "Rejected",
      jobNumber: 11,
      increase: "04",
      circularIncrease: 74,
      color: "#FFA329",
      strokeColor: "#FEEFDF",
      iconStyle: {
        backgroundColor: "#FEEFDF",
      },
    },
  ];

  const postedJobData = [
    {
      id: '01',
      title: "Looking a Cannabis labour",
      product: "Cannabis",
      department: "Grower",
      location: "Philadelphia, United States (On-site)",
      date: "July 28, 2022",
      isActive: true,
      activeCandidates: 3,
      awaitingCandidates: 0,
      reviewed: 1,
      contacting: 2
    },
    {
      id: '02',
      title: "Looking a Cannabis labour",
      product: "Cannabis",
      department: "Grower",
      location: "Philadelphia, United States (On-site)",
      date: "July 28, 2022",
      isActive: true,
      activeCandidates: 0,
      awaitingCandidates: 2,
      reviewed: 0,
      contacting: 1
    },
    {
      id: '03',
      title: "Looking a Cannabis labour",
      product: "Cannabis",
      department: "Grower",
      location: "Philadelphia, United States (On-site)",
      date: "July 28, 2022",
      isActive: false,
      activeCandidates: 5,
      awaitingCandidates: 1,
      reviewed: 1,
      contacting: 2
    },
    {
      id: '04',
      title: "Looking a Cannabis labour",
      product: "Cannabis",
      department: "Grower",
      location: "Philadelphia, United States (On-site)",
      date: "July 28, 2022",
      isActive: true,
      activeCandidates: 3,
      awaitingCandidates: 0,
      reviewed: 1,
      contacting: 2
    },
    {
      id: '05',
      title: "Looking a Cannabis labour",
      product: "Cannabis",
      department: "Grower",
      location: "Philadelphia, United States (On-site)",
      date: "July 28, 2022",
      isActive: false,
      activeCandidates: 0,
      awaitingCandidates: 0,
      reviewed: 0,
      contacting: 0
    },
    {
      id: '06',
      title: "Looking a Cannabis labour",
      product: "Cannabis",
      department: "Grower",
      location: "Philadelphia, United States (On-site)",
      date: "July 28, 2022",
      isActive: true,
      activeCandidates: 0,
      awaitingCandidates: 0,
      reviewed: 1,
      contacting: 6
    },
    {
      id: '07',
      title: "Looking a Cannabis labour",
      product: "Cannabis",
      department: "Grower",
      location: "Philadelphia, United States (On-site)",
      date: "July 28, 2022",
      isActive: false,
      activeCandidates: 2,
      awaitingCandidates: 0,
      reviewed: 0,
      contacting: 0
    },
    {
      id: '08',
      title: "Looking a Cannabis labour last job",
      product: "Cannabis",
      department: "Grower",
      location: "Philadelphia, United States (On-site)",
      date: "July 28, 2022",
      isActive: true,
      activeCandidates: 3,
      awaitingCandidates: 0,
      reviewed: 1,
      contacting: 2
    },
  ];

  const [postedJob, setPostedJob] = useState(postedJobData);
  const [postJobModalIsOpen, setPostJobModalIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* ---------------------- title area starts ---------------------- */}

      <Header title={title} />

      {/* ---------------------- title area ends ---------------------- */}

      {/* ---------------------- Job data starts ---------------------- */}

      <JobStats jobData={jobData}/>

      {/* ---------------------- Job data ends ---------------------- */}

      {/* ---------------------- Jobs starts ---------------------- */}

      <View style={styles.jobs}>
        <View style={styles.jobTypeTitleContainer}>
          <Text style={styles.jobtypeTitle}>Opened & Paused Jobs</Text>
          <Pressable onPress={()=>{setPostJobModalIsOpen(true)}}>
            <View style={styles.postBtn}>
              <Text style={styles.postBtnText}>Post a Job</Text>
            </View>
          </Pressable>
          <PostJobModal postedJob={postedJob} setPostedJob={setPostedJob} postJobModalIsOpen={postJobModalIsOpen} setPostJobModalIsOpen={setPostJobModalIsOpen} />
        </View>
        <View style={styles.jobsContainer}>
          <SearchBar />
          <ScrollView style={{borderWidth: 1}} showsVerticalScrollIndicator={false}>
            {/* {postedJob.map((pj, index) => (
              <PostedJobCards key={index} index={index} postedJob={postedJob} setPostedJob={setPostedJob} pj={pj} setTitle={setTitle}/>
            ))} */}
          </ScrollView>
          <SearchBar />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  jobs: {
    marginHorizontal: 24,
    flex: 1
  },
  jobsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingTop: 12,
    flex: 1,
  },
  jobTypeTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 9,
  },
  jobtypeTitle: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "600",
  },
  postBtn: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 3,
  },
  postBtnText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  
});

export default Job;
