export type PanayaOperation = {
  operationId: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  rawPath: string;
  summary: string;
  tags: string[];
  pathParams: Array<{ name: string; required: boolean; type: string }>;
  queryParams: Array<{ name: string; required: boolean; type: string }>;
  hasBody: boolean;
};

export const PANAYA_OPERATIONS: PanayaOperation[] = [
  {
    "operationId": "Add_attachment_to_Test",
    "method": "POST",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/attach",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/attach",
    "summary": "Add attachment to Test",
    "tags": [
      "Test"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_cycle",
    "method": "POST",
    "path": "/api/projects/{projectId}/cycles",
    "rawPath": "/api/projects/{projectId}/cycles",
    "summary": "Create cycle",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Defect",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/defects",
    "rawPath": "/api/v1/projects/{projectId}/defects",
    "summary": "Create Defect",
    "tags": [
      "Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Defect_s_Comment",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/defects/{id}/comments/",
    "rawPath": "/api/v1/projects/{projectId}/defects/{id}/comments/",
    "summary": "Create Defect's Comment",
    "tags": [
      "Defect",
      "Defects - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Feature",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/features",
    "rawPath": "/api/v1/projects/{projectId}/features",
    "summary": "Create Feature",
    "tags": [
      "Features"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Feature_s_Comment",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/features/{id}/comments/",
    "rawPath": "/api/v1/projects/{projectId}/features/{id}/comments/",
    "summary": "Create Feature's Comment",
    "tags": [
      "Features",
      "Feature - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Planned_run",
    "method": "POST",
    "path": "/api/projects/{projectId}/{cycle_id}/quickTests/{quickTest_id}/plannedRuns",
    "rawPath": "/api/projects/{projectId}/{cycle_id}/quickTests/{quickTest_id}/plannedRuns",
    "summary": "Create Planned run",
    "tags": [
      "QuickTests"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "quickTest_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Quick_Test",
    "method": "POST",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/",
    "summary": "Create Quick Test",
    "tags": [
      "QuickTests"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Req_s_Comment",
    "method": "POST",
    "path": "/api/v1/requirements/{requirement_id}/comments/",
    "rawPath": "/api/v1/requirements/{requirement_id}/comments/",
    "summary": "Create Req's Comment",
    "tags": [
      "Requirements",
      "Requirement - Comments"
    ],
    "pathParams": [
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Requirement_Company_level",
    "method": "POST",
    "path": "/api/v1/requirements",
    "rawPath": "/api/v1/requirements",
    "summary": "Create Requirement - Company level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Requirement_Project_level",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/requirements",
    "rawPath": "/api/v1/projects/{projectId}/requirements",
    "summary": "Create Requirement - Project level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Requirement_Project_level_NEW",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/requirements",
    "rawPath": "/api/v1/projects/{projectId}/requirements",
    "summary": "Create Requirement - Project level (NEW)",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Task",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/tasks",
    "rawPath": "/api/v1/projects/{projectId}/tasks",
    "summary": "Create Task",
    "tags": [
      "Task"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Task_s_Comment",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/tasks/{id}/comments/",
    "rawPath": "/api/v1/projects/{projectId}/tasks/{id}/comments/",
    "summary": "Create Task's Comment",
    "tags": [
      "Task",
      "Tasks - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_test",
    "method": "POST",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/",
    "summary": "Create test",
    "tags": [
      "Test"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Test_Comment",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments",
    "rawPath": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments",
    "summary": "Create Test Comment",
    "tags": [
      "Test",
      "Test Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Test_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Test_Run",
    "method": "POST",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns",
    "summary": "Create Test Run Pass OK",
    "tags": [
      "Test",
      "Test Run"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "step_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_test_step",
    "method": "POST",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps",
    "summary": "Create test step",
    "tags": [
      "Step"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Create_Test_v1",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/cycles/{Cycle_ID}/tests",
    "rawPath": "/api/v1/projects/{projectId}/cycles/{Cycle_ID}/tests",
    "summary": "Create Test - v1",
    "tags": [
      "Test"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Cycle_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "CreateRequirement_by_account",
    "method": "POST",
    "path": "/api/accounts/{acountId}/requirements",
    "rawPath": "/api/accounts/{acountId}/requirements",
    "summary": "Update cycle",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "acountId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Defect_Meta_Data",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/defects/metadata",
    "rawPath": "/api/v1/projects/{projectId}/defects/metadata",
    "summary": "Defect Meta Data",
    "tags": [
      "Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Delete_Cycle",
    "method": "DELETE",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}",
    "summary": "Please note that the deletion of a cycle will delete ALL folders, business processes, tests etc. within that cycle as well. This cannot be restored.",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Delete_Defect",
    "method": "DELETE",
    "path": "/api/v1/projects/{projectId}/defects/{id}",
    "rawPath": "/api/v1/projects/{projectId}/defects/{id}",
    "summary": "Delete Defect",
    "tags": [
      "Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Delete_Defect_s_Comment",
    "method": "DELETE",
    "path": "/api/v1/projects/{projectId}/defects/{id}/comments/dc7953f8-9d53-425d-9937-bc581d7fd82d",
    "rawPath": "/api/v1/projects/{projectId}/defects/{id}/comments/dc7953f8-9d53-425d-9937-bc581d7fd82d",
    "summary": "Delete Defect's Comment",
    "tags": [
      "Defect",
      "Defects - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Delete_Feature",
    "method": "DELETE",
    "path": "/api/v1/projects/{projectId}/features/{id}",
    "rawPath": "/api/v1/projects/{projectId}/features/{id}",
    "summary": "Delete Feature",
    "tags": [
      "Features"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Delete_Feature_s_Comment",
    "method": "DELETE",
    "path": "/api/v1/projects/{projectId}/features/{id}/comments/{guid}",
    "rawPath": "/api/v1/projects/{projectId}/features/{id}/comments/{guid}",
    "summary": "Delete Feature's Comment",
    "tags": [
      "Features",
      "Feature - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      },
      {
        "name": "guid",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Delete_Req_s_Comment",
    "method": "DELETE",
    "path": "/api/v1/requirements/{requirement_id}/comments/{commend_id}",
    "rawPath": "/api/v1/requirements/{requirement_id}/comments/{commend_id}",
    "summary": "Delete Req's Comment",
    "tags": [
      "Requirements",
      "Requirement - Comments"
    ],
    "pathParams": [
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "commend_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Delete_Requirement_Company_level",
    "method": "DELETE",
    "path": "/api/v1/requirements/{requirement_id}",
    "rawPath": "/api/v1/requirements/{requirement_id}",
    "summary": "Delete Requirement - Company level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Delete_Task",
    "method": "DELETE",
    "path": "/api/v1/projects/{projectId}/tasks/{id}",
    "rawPath": "/api/v1/projects/{projectId}/tasks/{id}",
    "summary": "Delete Task",
    "tags": [
      "Task"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Delete_Tasks_s_Comment",
    "method": "DELETE",
    "path": "/api/v1/projects/{projectId}/tasks/{id}/comments/d1271d04-18ff-4066-aa5d-bca7c4fb735c",
    "rawPath": "/api/v1/projects/{projectId}/tasks/{id}/comments/d1271d04-18ff-4066-aa5d-bca7c4fb735c",
    "summary": "Delete Tasks's Comment",
    "tags": [
      "Task",
      "Tasks - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Delete_Test_Comment",
    "method": "DELETE",
    "path": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments/{Comment_ID}",
    "rawPath": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments/{Comment_ID}",
    "summary": "Comment ID example: 4e4ea178-c2a3-46a7-bac4-0a73c9901cf2",
    "tags": [
      "Test",
      "Test Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Test_ID",
        "required": true,
        "type": "string"
      },
      {
        "name": "Comment_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Duplicate_Cycle",
    "method": "POST",
    "path": "/api/projects/{projectId}/cycles/{id}/duplicate",
    "rawPath": "/api/projects/{projectId}/cycles/{id}/duplicate",
    "summary": "Duplicate  Cycle",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "export_steps_tests_or_defects",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/export/tests",
    "rawPath": "/api/v1/projects/{projectId}/export/tests",
    "summary": "export steps, tests or defects",
    "tags": [
      "Step"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Feature_Meta_Data",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/features/metadata",
    "rawPath": "/api/v1/projects/{projectId}/features/metadata",
    "summary": "Feature Meta Data",
    "tags": [
      "Features"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Account_Info",
    "method": "GET",
    "path": "/api/accounts/",
    "rawPath": "/api/accounts/",
    "summary": "get users",
    "tags": [
      "Project"
    ],
    "pathParams": [],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_cycles",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/test",
    "rawPath": "/api/projects/{projectId}/cycles/test",
    "summary": "Get all cycles ",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Defect_s_Comments",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/defects/{id}/comments",
    "rawPath": "/api/v1/projects/{projectId}/defects/{id}/comments",
    "summary": "Get All Defect's Comments",
    "tags": [
      "Defect",
      "Defects - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Defect_Search_with_fields",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/defects/",
    "rawPath": "/api/v1/projects/{projectId}/defects/",
    "summary": "Get All Defect - Search with fields",
    "tags": [
      "Search"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "fields",
        "required": false,
        "type": "string"
      },
      {
        "name": "query",
        "required": true,
        "type": "string"
      },
      {
        "name": "fields",
        "required": true,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Defect_Search_with_filter_and_return_specific_fields",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/defects",
    "rawPath": "/api/v1/projects/{projectId}/defects",
    "summary": "Get All Defect - Search with filter and return specific fields",
    "tags": [
      "Search"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "fields",
        "required": true,
        "type": "string"
      },
      {
        "name": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "query",
        "required": true,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Defects",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/defects/",
    "rawPath": "/api/v1/projects/{projectId}/defects/",
    "summary": "Get All Defects",
    "tags": [
      "Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Defects_related_to_a_Planned_Run",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycleId}/quickTests/{QuickTestId}/plannedRuns/{plannedRunId}/defects",
    "rawPath": "/api/projects/{projectId}/cycles/{cycleId}/quickTests/{QuickTestId}/plannedRuns/{plannedRunId}/defects",
    "summary": "Get all Defects related to a Planned Run",
    "tags": [
      "Defect",
      "Defect Relations"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycleId",
        "required": true,
        "type": "string"
      },
      {
        "name": "QuickTestId",
        "required": true,
        "type": "string"
      },
      {
        "name": "plannedRunId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Defects_related_to_a_Planned_Run_1",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycleId}/quickTests/{QuickTestId}/plannedRuns/{plannedRunId}/defects",
    "rawPath": "/api/projects/{projectId}/cycles/{cycleId}/quickTests/{QuickTestId}/plannedRuns/{plannedRunId}/defects",
    "summary": "Get all Defects related to a Planned Run",
    "tags": [
      "Relations",
      "Defects - Test/Step/Planned Run"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycleId",
        "required": true,
        "type": "string"
      },
      {
        "name": "QuickTestId",
        "required": true,
        "type": "string"
      },
      {
        "name": "plannedRunId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Defects_related_to_a_Planned_Run_2",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycleId}/quickTests/{QuickTestId}/plannedRuns/{plannedRunId}/defects",
    "rawPath": "/api/projects/{projectId}/cycles/{cycleId}/quickTests/{QuickTestId}/plannedRuns/{plannedRunId}/defects",
    "summary": "Get all Defects related to a Planned Run",
    "tags": [
      "QuickTests"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycleId",
        "required": true,
        "type": "string"
      },
      {
        "name": "QuickTestId",
        "required": true,
        "type": "string"
      },
      {
        "name": "plannedRunId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Defects_related_to_a_Step",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycleId}/tests/{testId}/steps/{Step_ID}/defects",
    "rawPath": "/api/projects/{projectId}/cycles/{cycleId}/tests/{testId}/steps/{Step_ID}/defects",
    "summary": "Get all Defects related to a Step",
    "tags": [
      "Step"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycleId",
        "required": true,
        "type": "string"
      },
      {
        "name": "testId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Step_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Defects_related_to_a_Test_Step",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycleId}/tests/{testId}/steps/{Step_ID}/defects",
    "rawPath": "/api/projects/{projectId}/cycles/{cycleId}/tests/{testId}/steps/{Step_ID}/defects",
    "summary": "Get all Defects related to a Test Step",
    "tags": [
      "Defect",
      "Defect Relations"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycleId",
        "required": true,
        "type": "string"
      },
      {
        "name": "testId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Step_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Defects_related_to_a_Test_Step_1",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycleId}/tests/{testId}/steps/{Step_ID}/defects",
    "rawPath": "/api/projects/{projectId}/cycles/{cycleId}/tests/{testId}/steps/{Step_ID}/defects",
    "summary": "Get all Defects related to a Test Step",
    "tags": [
      "Relations",
      "Defects - Test/Step/Planned Run"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycleId",
        "required": true,
        "type": "string"
      },
      {
        "name": "testId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Step_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Features",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/features",
    "rawPath": "/api/v1/projects/{projectId}/features",
    "summary": "Get All Features",
    "tags": [
      "Features"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Features_L2_under_Req_L1_in_Company_level",
    "method": "GET",
    "path": "/api/v1/requirements/{requirement_id}/features/",
    "rawPath": "/api/v1/requirements/{requirement_id}/features/",
    "summary": "Get All Features (L2) under Req (L1) - in Company level",
    "tags": [
      "Relations"
    ],
    "pathParams": [
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Features_L2_under_Req_L1_in_Project_level",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/requirements/{requirement_id}/features/",
    "rawPath": "/api/v1/projects/{projectId}/requirements/{requirement_id}/features/",
    "summary": "Get All Features (L2) under Req (L1) - in Project level",
    "tags": [
      "Relations"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "fields",
        "required": false,
        "type": "string"
      },
      {
        "name": "order",
        "required": false,
        "type": "string"
      },
      {
        "name": "\"page size\"",
        "required": false,
        "type": "string"
      },
      {
        "name": "\"page number\"",
        "required": false,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "get_all_folders",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/folders",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/folders",
    "summary": "get all fo;ders under parent",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "get_all_folders_1",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/folders",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/folders",
    "summary": "get all folders ",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Get_All_L1_Comments",
    "method": "GET",
    "path": "/api/v1/requirements/{id}/comments/",
    "rawPath": "/api/v1/requirements/{id}/comments/",
    "summary": "Get All L1 Comments",
    "tags": [
      "Requirements",
      "Requirement - Comments"
    ],
    "pathParams": [
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_L2_Comments",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/features/{id}/comments",
    "rawPath": "/api/v1/projects/{projectId}/features/{id}/comments",
    "summary": "Get All L2 Comments",
    "tags": [
      "Features",
      "Feature - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_L3_Comments",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/tasks/{id}/comments",
    "rawPath": "/api/v1/projects/{projectId}/tasks/{id}/comments",
    "summary": "Get All L3 Comments",
    "tags": [
      "Task",
      "Tasks - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Planned_run",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quickTest_id}/plannedRuns/",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quickTest_id}/plannedRuns/",
    "summary": "Get all Planned run",
    "tags": [
      "QuickTests"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "quickTest_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_projects",
    "method": "GET",
    "path": "/api/v2/projects",
    "rawPath": "/api/v2/projects",
    "summary": "Get all projects",
    "tags": [
      "Project"
    ],
    "pathParams": [],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Release",
    "method": "GET",
    "path": "/api/v1/release/",
    "rawPath": "/api/v1/release/",
    "summary": "Get All Release",
    "tags": [
      "Release"
    ],
    "pathParams": [],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Req_L1_from_Defect",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/defects/{id}/requirements",
    "rawPath": "/api/v1/projects/{projectId}/defects/{id}/requirements",
    "summary": "Get All Req.(L1) - from Defect",
    "tags": [
      "Relations",
      "Link Req.(L1) - to Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Req_s_L1_Defects",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/requirements/{requirement_id}/defects",
    "rawPath": "/api/v1/projects/{projectId}/requirements/{requirement_id}/defects",
    "summary": "Get All Req's (L1) Defects",
    "tags": [
      "Relations",
      "Link Defect - to Req. (L1)"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Requirement_Search_Date_range",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/requirements",
    "rawPath": "/api/v1/projects/{projectId}/requirements",
    "summary": "Get All Requirement - Search Date range",
    "tags": [
      "Search"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "query",
        "required": true,
        "type": "string"
      },
      {
        "name": "order",
        "required": true,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Requirements_Company_level",
    "method": "GET",
    "path": "/api/v1/requirements/",
    "rawPath": "/api/v1/requirements/",
    "summary": "Get All Requirements - Company level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "fields",
        "required": false,
        "type": "string"
      },
      {
        "name": "query",
        "required": false,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Requirements_Project_level",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/requirements/",
    "rawPath": "/api/v1/projects/{projectId}/requirements/",
    "summary": "Get All Requirements - Project level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "fields",
        "required": false,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Task_Search_on_Field",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/tasks/",
    "rawPath": "/api/v1/projects/{projectId}/tasks/",
    "summary": "Get All Task - Search on Field",
    "tags": [
      "Search"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "fields",
        "required": true,
        "type": "string"
      },
      {
        "name": "query",
        "required": true,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Tasks",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/tasks/",
    "rawPath": "/api/v1/projects/{projectId}/tasks/",
    "summary": "Get All Tasks ",
    "tags": [
      "Task"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Tasks_L3_under_Feature_L2_in_Project_level",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/features/{feature_id}/tasks/",
    "rawPath": "/api/v1/projects/{projectId}/features/{feature_id}/tasks/",
    "summary": "Get All Tasks (L3) under Feature (L2) , in Project level",
    "tags": [
      "Relations"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "feature_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Test_Comments",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments",
    "rawPath": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments",
    "summary": "Get all Test Comments",
    "tags": [
      "Test",
      "Test Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Test_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "get_all_tests",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests",
    "summary": "get all tests",
    "tags": [
      "Test"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Tests_related_to_a_Defect_with_Influence",
    "method": "GET",
    "path": "/api/projects/{projectId}/defects/{Defect_ID}/steps",
    "rawPath": "/api/projects/{projectId}/defects/{Defect_ID}/steps",
    "summary": "Get all Tests related to a Defect (with Influence)",
    "tags": [
      "Defect",
      "Defect Relations"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Defect_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Tests_related_to_a_Defect_with_Influence_1",
    "method": "GET",
    "path": "/api/projects/{projectId}/defects/{Defect_ID}/steps",
    "rawPath": "/api/projects/{projectId}/defects/{Defect_ID}/steps",
    "summary": "Get all Tests related to a Defect (with Influence)",
    "tags": [
      "Relations",
      "Defects - Test/Step/Planned Run"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Defect_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_all_Tests_related_to_a_Defect_with_Influence_2",
    "method": "GET",
    "path": "/api/projects/{projectId}/defects/{Defect_ID}/steps",
    "rawPath": "/api/projects/{projectId}/defects/{Defect_ID}/steps",
    "summary": "Get all Tests related to a Defect (with Influence)",
    "tags": [
      "Test",
      "Test Relations"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Defect_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Users_By_Company",
    "method": "GET",
    "path": "/api/v1/users/",
    "rawPath": "/api/v1/users/",
    "summary": "according user's token (after login) - return all users",
    "tags": [
      "Users"
    ],
    "pathParams": [],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_All_Users_By_Project",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/users/",
    "rawPath": "/api/v1/projects/{projectId}/users/",
    "summary": "Get All Users - By Project",
    "tags": [
      "Users"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_BP",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/businessProcesses/",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/businessProcesses/",
    "summary": "Get BP",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "get_cycle",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}",
    "summary": "get spesific cycle      ",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Defect_By_Cycle_with_Pagination",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/defects",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/defects",
    "summary": "Get Defect By Cycle with Pagination",
    "tags": [
      "Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "page",
        "required": true,
        "type": "string"
      },
      {
        "name": "pageSize",
        "required": true,
        "type": "string"
      },
      {
        "name": "showOpen",
        "required": true,
        "type": "string"
      },
      {
        "name": "showClosed",
        "required": true,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_Defect_by_ID",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/defects/{id}",
    "rawPath": "/api/v1/projects/{projectId}/defects/{id}",
    "summary": "Get Defect by ID ",
    "tags": [
      "Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Defect_By_Test",
    "method": "GET",
    "path": "/api/projects/{projectId}/tests/{id}/defects",
    "rawPath": "/api/projects/{projectId}/tests/{id}/defects",
    "summary": "Get Defect By Test",
    "tags": [
      "Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "showOpen",
        "required": false,
        "type": "string"
      },
      {
        "name": "showClosed",
        "required": false,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_Defect_Comment_By_guid",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/defects/{id}/comments/dc7953f8-9d53-425d-9937-bc581d7fd82d",
    "rawPath": "/api/v1/projects/{projectId}/defects/{id}/comments/dc7953f8-9d53-425d-9937-bc581d7fd82d",
    "summary": "Get Defect Comment - By guid",
    "tags": [
      "Defect",
      "Defects - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Defects_Search_with_Pagination_and_return_specific_fields",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/defects",
    "rawPath": "/api/v1/projects/{projectId}/defects",
    "summary": "Get Defects - Search with Pagination and return specific fields",
    "tags": [
      "Search"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "query",
        "required": true,
        "type": "string"
      },
      {
        "name": "pageNumber",
        "required": true,
        "type": "string"
      },
      {
        "name": "pageSize",
        "required": true,
        "type": "string"
      },
      {
        "name": "fields",
        "required": true,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_event",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/pa/getEvent/{eventId}",
    "rawPath": "/api/v1/projects/{projectId}/pa/getEvent/{eventId}",
    "summary": "Get event",
    "tags": [
      "Panaya Automation API"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "eventId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Feature_by_ID",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/features/{id}",
    "rawPath": "/api/v1/projects/{projectId}/features/{id}",
    "summary": "Get Feature by ID",
    "tags": [
      "Features"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "get_folder",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/folders/{folder_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/folders/{folder_id}",
    "summary": "get folder",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "folder_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_L1_Comment_By_guid",
    "method": "GET",
    "path": "/api/v1/requirements/{requirement_id}/comments/{guid}",
    "rawPath": "/api/v1/requirements/{requirement_id}/comments/{guid}",
    "summary": "Get L1 Comment - By guid",
    "tags": [
      "Requirements",
      "Requirement - Comments"
    ],
    "pathParams": [
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "guid",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_L2_Comment_By_guid",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/features/{id}/comments/{guid}",
    "rawPath": "/api/v1/projects/{projectId}/features/{id}/comments/{guid}",
    "summary": "Get L2 Comment - By guid",
    "tags": [
      "Features",
      "Feature - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      },
      {
        "name": "guid",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_L3_Comment_By_ID",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/tasks/{task_id}/comments/{guid}",
    "rawPath": "/api/v1/projects/{projectId}/tasks/{task_id}/comments/{guid}",
    "summary": "Get L3 Comment - By ID",
    "tags": [
      "Task",
      "Tasks - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "task_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "guid",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "get_link_to_exported_steps_tests_or_defects",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/request/{request_id}",
    "rawPath": "/api/v1/projects/{projectId}/request/{request_id}",
    "summary": "get link to exported steps, tests or defects",
    "tags": [
      "Step"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "request_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Projects_Friendly",
    "method": "GET",
    "path": "/api/v1/projects",
    "rawPath": "/api/v1/projects",
    "summary": "Get Projects - Friendly ",
    "tags": [
      "Project"
    ],
    "pathParams": [],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Requirement_By_Id_Company_level",
    "method": "GET",
    "path": "/api/v1/requirements/{requirement_id}",
    "rawPath": "/api/v1/requirements/{requirement_id}",
    "summary": "Get Requirement By Id - Company level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Requirement_By_Id_Project_level",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/requirements/{requirement_id}",
    "rawPath": "/api/v1/projects/{projectId}/requirements/{requirement_id}",
    "summary": "Get Requirement By Id - Project level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Requirements_by_Account_and_date",
    "method": "GET",
    "path": "/api/accounts/{accountId}/requirements",
    "rawPath": "/api/accounts/{accountId}/requirements",
    "summary": "Get Requirements by Account and date",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "accountId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "toDate",
        "required": true,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "Get_specific_Planned_run",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quickTest_id}/plannedRuns/{run_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quickTest_id}/plannedRuns/{run_id}",
    "summary": "Get specific Planned run",
    "tags": [
      "QuickTests"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "quickTest_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "run_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_specific_Quick_Test",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quicktest_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quicktest_id}",
    "summary": "Get specific Quick Test",
    "tags": [
      "QuickTests"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "quicktest_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Task_by_ID",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/tasks/{id}",
    "rawPath": "/api/v1/projects/{projectId}/tasks/{id}",
    "summary": "Get Task by ID ",
    "tags": [
      "Task"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Test",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}",
    "summary": "is the long ID that is returned by the \"get all tests\" API call",
    "tags": [
      "Test"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Test_by_ID_simple",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/tests/{Test_ID}",
    "rawPath": "/api/v1/projects/{projectId}/tests/{Test_ID}",
    "summary": "Test_ID corresponds to the ID you see in the Panaya User Interface",
    "tags": [
      "Test"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Test_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Test_Comment_by_ID",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments/{Comment_ID}",
    "rawPath": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments/{Comment_ID}",
    "summary": "Comment_ID example: 4e4ea178-c2a3-46a7-bac4-0a73c9901cf2",
    "tags": [
      "Test",
      "Test Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Test_ID",
        "required": true,
        "type": "string"
      },
      {
        "name": "Comment_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Test_Run",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns/{testrun_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns/{testrun_id}",
    "summary": "get all test runs",
    "tags": [
      "Test",
      "Test Run"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "step_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "testrun_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_Test_Runs",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns",
    "summary": "get all test runs",
    "tags": [
      "Test",
      "Test Run"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "step_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Get_test_runs_of_step",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns/",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns/",
    "summary": "Get test runs of step",
    "tags": [
      "Step"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "step_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "get_test_step",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}",
    "summary": "get test step",
    "tags": [
      "Step"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "step_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "get_test_steps",
    "method": "GET",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps",
    "summary": "get test steps",
    "tags": [
      "Step"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "GetEntryPoints_fromRequirement_By_project_and_id",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/requirements/{requirement_id}/generateEntryPoints",
    "rawPath": "/api/v1/projects/{projectId}/requirements/{requirement_id}/generateEntryPoints",
    "summary": "get entry points",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "GetRequirement_By_account_and_id",
    "method": "GET",
    "path": "/api/accounts/{accountId}/requirements/{requirement_id}",
    "rawPath": "/api/accounts/{accountId}/requirements/{requirement_id}",
    "summary": "GetRequirement By account and id",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "accountId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "GetRequirement_By_project_and_id_filter_by_date",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/requirements",
    "rawPath": "/api/v1/projects/{projectId}/requirements",
    "summary": "GetRequirement By project and id filter by date",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "query",
        "required": true,
        "type": "string"
      },
      {
        "name": "order",
        "required": true,
        "type": "string"
      }
    ],
    "hasBody": false
  },
  {
    "operationId": "GetRequirementCoverageTests",
    "method": "GET",
    "path": "/api/accounts/{accountId}/requirements/{requirement_id}/tests",
    "rawPath": "/api/accounts/{accountId}/requirements/{requirement_id}/tests",
    "summary": "GetRequirementCoverageTests",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "accountId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "GetRequirementDefects",
    "method": "GET",
    "path": "/api/accounts/{accountId}/requirements/{requirement_id}/defects",
    "rawPath": "/api/accounts/{accountId}/requirements/{requirement_id}/defects",
    "summary": "GetRequirementDefects",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "accountId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "GetRequirementTests",
    "method": "GET",
    "path": "/api/projects/{projectId}/requirements/{requirement_id}/tests",
    "rawPath": "/api/projects/{projectId}/requirements/{requirement_id}/tests",
    "summary": "GetRequirementTests",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "L1_Meta_data_project_level",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/requirements/metadata",
    "rawPath": "/api/v1/projects/{projectId}/requirements/metadata",
    "summary": "L1 Meta data - project level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Link_a_Defect_to_Req_L1",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/requirements/{requirement_id}/defects/{defect_id}",
    "rawPath": "/api/v1/projects/{projectId}/requirements/{requirement_id}/defects/{defect_id}",
    "summary": "Link a Defect to Req (L1)",
    "tags": [
      "Relations",
      "Link Defect - to Req. (L1)"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "defect_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Link_Req_L1_to_Defect",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/defects/{defect_id}/requirements/{requirement_id}",
    "rawPath": "/api/v1/projects/{projectId}/defects/{defect_id}/requirements/{requirement_id}",
    "summary": "Link Req.(L1) - to Defect",
    "tags": [
      "Relations",
      "Link Req.(L1) - to Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "defect_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Login_with_access_token_deprecated_Use_API_token_instead",
    "method": "POST",
    "path": "/api/accesstoken",
    "rawPath": "/api/accesstoken",
    "summary": "Login with access token (deprecated - Use API token instead)",
    "tags": [
      "Postman"
    ],
    "pathParams": [],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Patch_Defect",
    "method": "PATCH",
    "path": "/api/v1/projects/{projectId}/defects/{id}",
    "rawPath": "/api/v1/projects/{projectId}/defects/{id}",
    "summary": "Patch Defect",
    "tags": [
      "Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Patch_Feature",
    "method": "PATCH",
    "path": "/api/v1/projects/{projectId}/features/{id}",
    "rawPath": "/api/v1/projects/{projectId}/features/{id}",
    "summary": "Patch Feature",
    "tags": [
      "Features"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Patch_Requirement_Company_level",
    "method": "PATCH",
    "path": "/api/v1/requirements/{requirement_id}",
    "rawPath": "/api/v1/requirements/{requirement_id}",
    "summary": "Patch Requirement - Company level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Patch_Requirement_Project_level",
    "method": "PATCH",
    "path": "/api/v1/projects/{projectId}/requirements/{requirement_id}",
    "rawPath": "/api/v1/projects/{projectId}/requirements/{requirement_id}",
    "summary": "Patch Requirement - Project level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Patch_Task",
    "method": "PATCH",
    "path": "/api/v1/projects/{projectId}/tasks/{id}",
    "rawPath": "/api/v1/projects/{projectId}/tasks/{id}",
    "summary": "Patch Task",
    "tags": [
      "Task"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Requirements_Metadata_Company_level",
    "method": "GET",
    "path": "/api/v1/requirements/metadata",
    "rawPath": "/api/v1/requirements/metadata",
    "summary": "Requirements Metadata - Company level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Run_test_sets",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/pa/runTestSets",
    "rawPath": "/api/v1/projects/{projectId}/pa/runTestSets",
    "summary": "Run test sets",
    "tags": [
      "Panaya Automation API"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Run_tests",
    "method": "POST",
    "path": "/api/v1/projects/{projectId}/pa/runTests",
    "rawPath": "/api/v1/projects/{projectId}/pa/runTests",
    "summary": "Run tests",
    "tags": [
      "Panaya Automation API"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "stepsReady",
    "method": "GET",
    "path": "/api/{projectId}/stepsReady",
    "rawPath": "/api/{projectId}/stepsReady",
    "summary": "stepsReady",
    "tags": [
      "Project"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Tasks_Meta_Data",
    "method": "GET",
    "path": "/api/v1/projects/{projectId}/tasks/metadata",
    "rawPath": "/api/v1/projects/{projectId}/tasks/metadata",
    "summary": "Tasks Meta Data",
    "tags": [
      "Task"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": false
  },
  {
    "operationId": "Unlink_Defect_to_Req_L1",
    "method": "DELETE",
    "path": "/api/v1/projects/{projectId}/requirements/{requirement_id}/defects/{defect_id}",
    "rawPath": "/api/v1/projects/{projectId}/requirements/{requirement_id}/defects/{defect_id}",
    "summary": "Unlink Defect - to Req.(L1)",
    "tags": [
      "Relations",
      "Link Defect - to Req. (L1)"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "defect_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Unlink_Req_L1_from_Defect",
    "method": "DELETE",
    "path": "/api/v1/projects/{projectId}/defects/{defect_id}/requirements/{requirement_id}",
    "rawPath": "/api/v1/projects/{projectId}/defects/{defect_id}/requirements/{requirement_id}",
    "summary": "Unlink Req.(L1) - from Defect",
    "tags": [
      "Relations",
      "Link Req.(L1) - to Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "defect_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_cycle",
    "method": "PUT",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}",
    "summary": "Update cycle",
    "tags": [
      "Cycle"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Defect",
    "method": "PUT",
    "path": "/api/v1/projects/{projectId}/defects/{id}",
    "rawPath": "/api/v1/projects/{projectId}/defects/{id}",
    "summary": "Update Defect",
    "tags": [
      "Defect"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Defect_s_Comment",
    "method": "PUT",
    "path": "/api/v1/projects/{projectId}/defects/{Id}/comments/dc7953f8-9d53-425d-9937-bc581d7fd82d",
    "rawPath": "/api/v1/projects/{projectId}/defects/{Id}/comments/dc7953f8-9d53-425d-9937-bc581d7fd82d",
    "summary": "Update Defect's Comment",
    "tags": [
      "Defect",
      "Defects - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Feature_L2",
    "method": "PUT",
    "path": "/api/v1/projects/{projectId}/features/{id}",
    "rawPath": "/api/v1/projects/{projectId}/features/{id}",
    "summary": "Update Feature L2",
    "tags": [
      "Features"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Feature_s_Comment",
    "method": "PUT",
    "path": "/api/v1/projects/{projectId}/features/{id}/comments/{guid}",
    "rawPath": "/api/v1/projects/{projectId}/features/{id}/comments/{guid}",
    "summary": "Update Feature's Comment",
    "tags": [
      "Features",
      "Feature - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      },
      {
        "name": "guid",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Planned_run",
    "method": "PUT",
    "path": "/api/projects/{projectId}/{cycle_id}/quickTests/{quickTest_id}/plannedRuns/{run_id}",
    "rawPath": "/api/projects/{projectId}/{cycle_id}/quickTests/{quickTest_id}/plannedRuns/{run_id}",
    "summary": "Update Planned run",
    "tags": [
      "QuickTests"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "quickTest_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "run_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_project",
    "method": "PATCH",
    "path": "/api/v2/projects/{ProjectID}",
    "rawPath": "/api/v2/projects/{ProjectID}",
    "summary": "Update  project",
    "tags": [
      "Project"
    ],
    "pathParams": [
      {
        "name": "ProjectID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Req_s_Comment",
    "method": "PUT",
    "path": "/api/v1/requirements/{requirement_id}/comments/{guid}",
    "rawPath": "/api/v1/requirements/{requirement_id}/comments/{guid}",
    "summary": "Update Req's Comment",
    "tags": [
      "Requirements",
      "Requirement - Comments"
    ],
    "pathParams": [
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "guid",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Requirement_Company_level",
    "method": "PUT",
    "path": "/api/v1/requirements/{requirement_id}",
    "rawPath": "/api/v1/requirements/{requirement_id}",
    "summary": "Update Requirement - Company level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Requirement_Project_level",
    "method": "PUT",
    "path": "/api/v1/projects/{projectId}/requirements/{requirement_id}",
    "rawPath": "/api/v1/projects/{projectId}/requirements/{requirement_id}",
    "summary": "Update Requirement - Project level",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Requirement_Project_level_NEW",
    "method": "PUT",
    "path": "/api/v1/projects/{projectId}/requirements/{requirement_id}",
    "rawPath": "/api/v1/projects/{projectId}/requirements/{requirement_id}",
    "summary": "Update Requirement - Project level (NEW)",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "update_specific_Quick_Test",
    "method": "PUT",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quickTest_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quickTest_id}",
    "summary": "update specific Quick Test",
    "tags": [
      "QuickTests"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "quickTest_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Task",
    "method": "PUT",
    "path": "/api/v1/projects/{projectId}/tasks/{id}",
    "rawPath": "/api/v1/projects/{projectId}/tasks/{id}",
    "summary": "Update Task",
    "tags": [
      "Task"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Tasks_s_Comment",
    "method": "PUT",
    "path": "/api/v1/projects/{projectId}/tasks/{task_id}/comments/{guid}",
    "rawPath": "/api/v1/projects/{projectId}/tasks/{task_id}/comments/{guid}",
    "summary": "Update Tasks's Comment",
    "tags": [
      "Task",
      "Tasks - Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "task_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "guid",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Test",
    "method": "PATCH",
    "path": "/api/v1/projects/{projectId}/tests/3711",
    "rawPath": "/api/v1/projects/{projectId}/tests/3711",
    "summary": "Update Test",
    "tags": [
      "Test"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Test_Comment",
    "method": "PUT",
    "path": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments/{Comment_ID}",
    "rawPath": "/api/v1/projects/{projectId}/tests/{Test_ID}/comments/{Comment_ID}",
    "summary": "Comment ID example: 4e4ea178-c2a3-46a7-bac4-0a73c9901cf2",
    "tags": [
      "Test",
      "Test Comments"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "Test_ID",
        "required": true,
        "type": "string"
      },
      {
        "name": "Comment_ID",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_Test_Run",
    "method": "PUT",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns/{testrun_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns/{testrun_id}",
    "summary": "Update Test Run",
    "tags": [
      "Test",
      "Test Run"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "step_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "testrun_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Update_test_step",
    "method": "PUT",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}",
    "summary": "Update test step",
    "tags": [
      "Step"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "step_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "UpdateRequirement_by_account_and_id",
    "method": "PUT",
    "path": "/api/accounts/{acountId}/requirements/{requirement_id}",
    "rawPath": "/api/accounts/{acountId}/requirements/{requirement_id}",
    "summary": "Update cycle",
    "tags": [
      "Requirements"
    ],
    "pathParams": [
      {
        "name": "acountId",
        "required": true,
        "type": "string"
      },
      {
        "name": "requirement_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Upload_ETL",
    "method": "POST",
    "path": "/api/accounts/{system_id}/etl/upload",
    "rawPath": "/api/accounts/{system_id}/etl/upload",
    "summary": "upload etl",
    "tags": [
      "Project"
    ],
    "pathParams": [
      {
        "name": "system_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [
      {
        "name": "extractionFile",
        "required": false,
        "type": "string"
      }
    ],
    "hasBody": true
  },
  {
    "operationId": "Upload_evidence_to_plannedRuns",
    "method": "POST",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quickTest_id}/plannedRuns/{run_id}/testruns",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/quickTests/{quickTest_id}/plannedRuns/{run_id}/testruns",
    "summary": "Upload evidence to plannedRuns",
    "tags": [
      "QuickTests"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "quickTest_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "run_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "Upload_evidence_to_step",
    "method": "POST",
    "path": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns/",
    "rawPath": "/api/projects/{projectId}/cycles/{cycle_id}/tests/{test_id}/steps/{step_id}/testruns/",
    "summary": "Upload evidence to step",
    "tags": [
      "Step"
    ],
    "pathParams": [
      {
        "name": "projectId",
        "required": true,
        "type": "string"
      },
      {
        "name": "cycle_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "test_id",
        "required": true,
        "type": "string"
      },
      {
        "name": "step_id",
        "required": true,
        "type": "string"
      }
    ],
    "queryParams": [],
    "hasBody": true
  },
  {
    "operationId": "url_api_v2_api_docs",
    "method": "GET",
    "path": "/api/v2/api-docs",
    "rawPath": "/api/v2/api-docs",
    "summary": "{{url}}/api/v2/api-docs",
    "tags": [
      "Swagger"
    ],
    "pathParams": [],
    "queryParams": [],
    "hasBody": false
  }
];
